// import { InizioApp } from "@neudesic/inizio-app-builder";
import { DataSource, /* Repository as TypeORMRepository */ } from "typeorm";
// import { APPLICATION_TYPES } from "../../application/constants/types";

// modify this based on your models
// import {
//     ProjectModel,
// } from "../data_access/sqldb_repositories/models";

export interface DataSourceInterface {
    readDataSource?: DataSource;
    writeDataSource?: DataSource;
    readWriteDataSource?: DataSource;
    readReplicaDataSource?: DataSource;
  }

export function bindTypeORMRepositories(dataSources: DataSourceInterface) {
    try {
        /* This is for example: MODIFY this based on your needs */

        // const { readWriteDataSource, readReplicaDataSource} = dataSources;
        // const projectModelRead = readWriteDataSource.getRepository(ProjectModel);
        // const projectModelReadReplica = readWriteDataSource.getRepository(ProjectModel);
        // InizioApp.container
        //     .bind<TypeORMRepository<ProjectModel>>(APPLICATION_TYPES.ProjectTypeOrmRepository)
        //     .toDynamicValue(() => projectModelRead)
        //     .inTransientScope();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}
