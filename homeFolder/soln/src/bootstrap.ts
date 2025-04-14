import { InizioApp } from "@neudesic/inizio-app-builder";
import { InizioAzureAppInsightsTelemetry } from "@neudesic/inizio-logger";
import { ICacheRepository } from "@neudesic/inizio-node-core";
import { CacheRedisRepository } from "@neudesic/inizio-redis";
import { APPLICATION_TYPES } from "./application/constants/types";
import {
    DomainConsumerMessagingRepositoryKafkaJS,
    DomainProducerMessagingRepositoryKafkaJS,
    KafkaConfiguration,
} from "@neudesic/inizio-kafka";
import { addSqlConnection } from "./infrastructure/data_access/sql_connection";
import { HexagonalMsError } from "./infrastructure/errors/hexagonal-ms-error";
import { applicationDependenciesModule } from "./inversify.config";
import "./presentation/rest_api/controllers";

export class Bootstrap {
    static async startup() {
        const inizioApp = InizioApp.create();
        try {
            inizioApp
                .addInizioDoctor()
                .addCircuitBreaker()
                .loadDependencies(applicationDependenciesModule as any);

            // configuring express
            const portNumber = Number(inizioApp.configManager.get("APP_PORT"));
            const rootPath = inizioApp.configManager.get("ROOT_PATH");
            inizioApp.addExpress({
                portNumber,
                rootPath,
                enableSwagger: true,
                enableContextMiddleware: true,
                enableErrorHandlerMiddleware: true,
                swaggerDocsOptions: {
                    apis: ["./src/presentation/rest_api/controllers/**/*.ts"],
                },
            });

            await addSqlConnection(inizioApp);

            // configuring app insights
            const appInsightsConfig = InizioAzureAppInsightsTelemetry.getConfig(
                {
                    instrumentationKey: inizioApp.configManager.get("APP_INSIGHTS_INSTRUMENTATION_KEY"),
                    cloudRoleName: inizioApp.configManager.packageInfo.name,
                    commonProperties: {
                        buildId: inizioApp.configManager.get("BUILD_ID"),
                        version: inizioApp.configManager.packageInfo.version,
                        domain: inizioApp.configManager.get("DOMAIN"),
                        subDomain: inizioApp.configManager.get("SUB_DOMAIN"),
                        workloadId: inizioApp.configManager.get("WORKLOAD_ID"),
                        workloadName: inizioApp.configManager.get("WORKLOAD_NAME"),
                    },
                },
                inizioApp.configManager,
            );
            const appInsightsClient = InizioAzureAppInsightsTelemetry.initClient(appInsightsConfig);
            if (appInsightsClient.client) {
                inizioApp.logger.addAzureAppInsightsTelemetryClient(appInsightsClient.client);
            }
            // configuring redis
            const redisConnectionString = await inizioApp.configManager.getSecret("REDIS_CONNECTION_STRING");
            const redisInstance = new CacheRedisRepository(redisConnectionString);
            inizioApp.bind<ICacheRepository>(APPLICATION_TYPES.CacheRepository).toConstantValue(redisInstance);
            // configure kafka
            inizioApp.addAsync(Bootstrap.setupKafkaProducer);
            inizioApp.addAsync(Bootstrap.setupKafkaConsumer);

            // starting express server
            inizioApp.start(() => {
                inizioApp.logger.info(`🚀 Swagger available on http://localhost:${portNumber}${rootPath}/swagger-ui`);
            });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            inizioApp.logger.error(HexagonalMsError.EXPRESS_SERVER_RUN_ERROR, { exception: error });
        }
    }
    static async setupKafkaProducer(inizioApp: InizioApp) {
        const kafkaConfiguration = await KafkaConfiguration.getConfiguration(inizioApp.configManager);
        const producer = new DomainProducerMessagingRepositoryKafkaJS(
            inizioApp.logger,
            kafkaConfiguration,
            inizioApp.metricsRepo,
            true,
        );

        inizioApp.bind(TYPES.ProducerRepository).toConstantValue(producer);
    }

    static async setupKafkaConsumer(inizioApp: InizioApp) {
        const kafkaConfiguration = await KafkaConfiguration.getConfiguration(inizioApp.configManager);
        const dlqProducer = new DomainProducerMessagingRepositoryKafkaJS(
            inizioApp.logger,
            kafkaConfiguration,
            inizioApp.metricsRepo,
            true,
        );
        const consumer = new DomainConsumerMessagingRepositoryKafkaJS(
            inizioApp.logger,
            inizioApp.requestContextManager,
            kafkaConfiguration,
            dlqProducer,
            inizioApp.metricsRepo,
            undefined,
        );

        inizioApp.bind(TYPES.ConsumerRepository).toConstantValue(consumer);
    }
}
