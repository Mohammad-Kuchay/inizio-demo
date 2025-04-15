import { controller, response, httpGet } from "inversify-express-utils";
import * as Express from "express";
import { Result } from "@neudesic/inizio-node-core";
import { BaseController } from "../base/base_controller";

@controller("/ping")
export class PingController extends BaseController {
    /**
     * @swagger
     * definitions:
     *   ResponseBase:
     *     type: object
     *     required:
     *       - isSuccess
     *       - message
     *     properties:
     *       isSuccess:
     *         type: boolean
     *       message:
     *         type: string
     *   ErrorResponseBase:
     *     allOf:
     *       - $ref: '#/definitions/ResponseBase'
     *       - properties:
     *           errorCode:
     *             type: string
     *           isSuccess:
     *             type: boolean
     *             default: false
     * /ping:
     *   get:
     *     tags:
     *       - PING
     *     summary: Ping the service
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     responses:
     *       '200':
     *         description: Ping
     *         schema:
     *           allOf:
     *             - $ref: '#/definitions/ResponseBase'
     *             - properties:
     *                 data:
     *                     type: boolean
     *       '403':
     *         description: Logged in user doesn't have permission to do this operation
     *         schema:
     *           allOf:
     *             - $ref: '#/definitions/ErrorResponseBase'
     */
    @httpGet("/")
    public async search(@response() res: Express.Response) {
        this.createResponse(res, Result.ok({ ping: true }));
    }
}
