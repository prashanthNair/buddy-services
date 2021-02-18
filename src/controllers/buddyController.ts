import { Request, Response, NextFunction } from "express";
import { IBuddyService } from "../services/IBuddyService";
import { BuddyService } from "../services/buddyService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { Buddy, BuddyLink } from "../models/buddy";

class SuccessResponse {
  status: Number;
  success: Boolean;
}

export class BuddyController {
  private constructor() { }

  private static instance: BuddyController = null;
  private buddyService = null;

  /**
   * To get singleton instance
   *
   * @param  {object} buddyService
   */

  public static getInstance(
    buddyService: IBuddyService = BuddyService.getInstance()
  ) {
    if (!BuddyController.instance) {
      BuddyController.instance = new BuddyController();
    }
    BuddyController.instance.buddyService = buddyService; // mock service Object is passed as a param from .spec
    return BuddyController.instance;
  }

  /**
     * Insert into buddy coloumn
     * TODO the functionality
     * @param  {object}   req
     * @param  {object}   res
     * @param  {function} next
     */
  public async postBuddy(req: Request, res: Response, next: NextFunction) {
    try {
      let buddyData: BuddyLink = {
        ParentId: req.params.parentId,
        MobileNum: req.params.mobileNum,
      };
      console.log
      const result = await this.buddyService.postBuddy(buddyData);

      if (result.errno) {
        console.log("Success");
        HttpResponseMessage.sendErrorResponse(res,result);
      } else {
        console.log("Else part");
        HttpResponseMessage.successResponse(res, "Sucessfull");
      }
    } catch (err) {
      console.log("Catch");
      HttpResponseMessage.sendErrorResponse(res, err);
    }
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