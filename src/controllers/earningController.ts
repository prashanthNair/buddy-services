import { NextFunction, Response, Request } from "express";
import { EarningService } from "../services/earningService";
import { IEarningService } from "../services/IEarningServie";
import { ITaskService } from "../services/ITaskService";
import { TaskService } from "../services/TaskService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";

export class EarningController {
    private constructor() { }

    private static instance: EarningController = null;
    private earningService = null;

    /**
     * To get singleton instance
     *
     * @param  {object} earningService
     */

    public static getInstance(
        earningService: IEarningService = EarningService.getInstance()
    ) {
        if (!EarningController.instance) {
            EarningController.instance = new EarningController();
        }
        EarningController.instance.earningService = earningService; // mock service Object is passed as a param from .spec
        return EarningController.instance;
    }

    /**
   * Get tasks for buddy
   * 
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
    public async listAllEarnings(req: Request, res: Response, next: NextFunction) {

        try {
            let buddyId =Number.parseInt(req.params.buddyId)
            const result = await this.earningService.listAllEarnings(buddyId);
            HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
        }
        catch (error) {
            HttpResponseMessage.sendErrorResponse(res, "Transaction Failed", error);
        }
    }
}