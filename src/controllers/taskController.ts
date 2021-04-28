import { NextFunction, Response,Request} from "express";
import { ITaskService } from "../services/ITaskService";
import { TaskService } from "../services/TaskService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";

export class TaskController {
    private constructor() { }
  
    private static instance: TaskController = null;
    private buddyService = null;
  
    /**
     * To get singleton instance
     *
     * @param  {object} buddyService
     */
  
    public static getInstance(
      buddyService: ITaskService = TaskService.getInstance()
    ) {
      if (!TaskController.instance) {
        TaskController.instance = new TaskController();
      }
      TaskController.instance.buddyService = buddyService; // mock service Object is passed as a param from .spec
      return TaskController.instance;
    }

    /**
   * Get tasks for buddy
   * 
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
  public async listTasks(req: Request, res: Response, next: NextFunction) {

    try {
      const result = await this.buddyService.listTasks();
      HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
    }
    catch (error) {
      HttpResponseMessage.sendErrorResponse(res, "Transaction Failed", error);
    }
  }
}