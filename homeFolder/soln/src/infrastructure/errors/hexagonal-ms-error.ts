import { BaseError, ERROR_CATEGORY } from "@neudesic/inizio-node-core";

export class HexagonalMsError extends BaseError {
    public static readonly UNKNOWN_ERROR = new BaseError(
        2001,
        "UNKNOWN error in hexagonal microservice",
        "We have ecnountered UNKNOWN error in hexagonal microservice, please try again. If problem persists please contact support with correlation id.",
        [ERROR_CATEGORY.Unknown]
    );

    public static readonly EXPRESS_SERVER_RUN_ERROR = new BaseError(
        2002,
        "Unabe to run express server",
        "We have ecnountered UNKNOWN error in running REST service using express server, please try again. If problem persists please contact support with correlation id.",
        [ERROR_CATEGORY.TechnicalInProcess]
    );

    public static readonly DATABASE_CONNECTION_ERROR = new BaseError(
        2003,
        "Unabe to run connect to database connection",
        "We have ecnountered UNKNOWN error in running REST service using express server, please try again. If problem persists please contact support with correlation id.",
        [ERROR_CATEGORY.TechnicalInProcess]
    );
}
