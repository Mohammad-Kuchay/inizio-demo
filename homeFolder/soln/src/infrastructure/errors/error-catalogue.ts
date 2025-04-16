import { TYPES } from "@neudesic/inizio-app-builder";
import { IConfigurationManager } from "@neudesic/inizio-configuration-manager";
import { ILogger } from "@neudesic/inizio-logger";
import * as express from "express";
import { Container } from "inversify";
import { posix } from "path";
import { HexagonalMsError } from "./hexagonal-ms-error";

/**
 * Error catalogue for hexagonal micro-service and base-error
 *
 * @param {Container} container
 * @param {express.Application} app
 */
function errorCatalogue(container: Container, app: express.Application) {
    const environmentConfigurationManager = container.get<IConfigurationManager>(TYPES.ConfigurationManager);
    const logger = container.get<ILogger>(TYPES.Logger);

    const rootPath = environmentConfigurationManager.get("ROOT_PATH");

    const errorCatalogueUrl = posix.join(rootPath, "error-catalogue");
    logger.info(`Configuring error catalogue url to ${errorCatalogueUrl}`);
    app.use(errorCatalogueUrl, (req, res) => {
        const json = JSON.stringify({
            "hexagonal-ms-errors": getHexagonalErrors()
        });
        res.send(json);
    });
}

function getHexagonalErrors() {
    const errorList :any = [];
    let currentClass = HexagonalMsError;
    while (currentClass) {
        Object.entries(currentClass).forEach((obj) => {
            errorList.push(obj);
        });
        currentClass = Object.getPrototypeOf(currentClass);
    }
    return errorList;
}

export { errorCatalogue };
