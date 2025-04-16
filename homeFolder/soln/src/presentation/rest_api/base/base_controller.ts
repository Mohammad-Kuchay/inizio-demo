import { TYPES } from "@neudesic/inizio-app-builder";
import { ILogger } from "@neudesic/inizio-logger";
import { IRequestContextManager, Result } from "@neudesic/inizio-node-core";
import { Response } from "express";
import { inject, injectable } from "inversify";
import { BaseHttpController } from "inversify-express-utils";

@injectable()
export abstract class BaseController extends BaseHttpController {
    @inject(TYPES.Logger) protected _contextAwareLogger: ILogger;

    @inject(TYPES.RequestContextManager) protected _currentContextManager: IRequestContextManager;

    /**
     * Create a response with standard HTTP response code
     * @param response Express response object
     * @param responseModel Response model
     */
    protected createResponse<T>(
        response: Response,
        responseModel: Result<T>,
        successStatusCode?: number
    ): void {
        if (responseModel.isSuccess) {
            response.status(successStatusCode || 200);
        } else if (
            responseModel.errorCode === null
            || responseModel.errorCode === undefined
        ) {
            response.status(500);
        } else if (responseModel.errorCode === "INVALID_REQUEST") {
            response.status(400);
        } else if (responseModel.errorCode === "RESOURCE_ALREADY_EXIST") {
            response.status(409);
        } else if (responseModel.errorCode === "RESOURCE_DOES_NOT_EXIST") {
            response.status(404);
        }

        // TODO:NOTE: Ideally we would want to refactor the Result<T> class in node-core
        // so that it infers errors from current context. But because the way Result<T> is defined
        // with static methods, injecting the context will have huge backword compatibility issues.
        // To minimise the impact, we are doing a dirty way to inject errors property here dynamically

        const responseModelJSON = { ...responseModel };

        response.json(responseModelJSON);
    }
}
