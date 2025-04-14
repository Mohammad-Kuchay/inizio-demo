import { InizioApp } from "@neudesic/inizio-app-builder";
import { getSqlDbConnection, IConnectionString } from "@neudesic/inizio-sql";

import { DataSourceOptions } from "typeorm";
import { APPLICATION_TYPES } from "../../application/constants/types";
import { bindTypeORMRepositories, DataSourceInterface } from "../container_config/typeorm.inversify.config";
import { HexagonalMsError } from "../errors/hexagonal-ms-error";

export async function addSqlConnection(inizioApp: InizioApp): Promise<void> {
    inizioApp.logger.debug("Adding SQL connection");

    const dataSources: DataSourceInterface = {
        readDataSource: undefined,
        writeDataSource: undefined,
        readWriteDataSource: undefined,
        readReplicaDataSource: undefined,
    };

    const entities: never[] = [
        // Add your DB models here
    ];

    try {
        // SQL Config for Read-Write

        const connectionStringReadWriteDb = inizioApp.configManager.get("READ_WRITE_DB_CONNECTION_STRING");
        const readWriteDbOptions: IConnectionString = {
            url: connectionStringReadWriteDb,
        };

        const dataSourceReadWrite: DataSourceOptions = {
            type: "postgres",
            entities,
            ...readWriteDbOptions,
            synchronize: false,
            logging: true,
        };
        const dataSourceReadWriteInstance = await getSqlDbConnection(
            dataSourceReadWrite,
            inizioApp.logger,
            inizioApp.requestContextManager,
        );
        if (dataSourceReadWriteInstance) {
            InizioApp.container
                .bind(APPLICATION_TYPES.DataSourceReadWrite)
                .toConstantValue(dataSourceReadWriteInstance);
            dataSources.readWriteDataSource = dataSourceReadWriteInstance;
        } else {
            throw new Error("Unable to connect to the read-write database");
        }

        inizioApp.logger.debug("SQL connections added");
        bindTypeORMRepositories(dataSources);
    } catch (exception) {
        inizioApp.logger.crit(HexagonalMsError.DATABASE_CONNECTION_ERROR, { exception });
        throw exception;
    }
}
