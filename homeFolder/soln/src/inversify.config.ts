import { ContainerModule } from "inversify";
import {
    bindHandlers,
    bindMappers,
    bindRepositories,
    bindServices
} from "./infrastructure/container_config";

export const applicationDependenciesModule = new ContainerModule((bind) => {
    bindHandlers(bind);
    bindMappers(bind);
    bindRepositories(bind);
    bindServices(bind);
});
