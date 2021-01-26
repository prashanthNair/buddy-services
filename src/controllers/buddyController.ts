import { Request, Response, NextFunction } from "express";
import { IBuddyService } from "../services/IBuddyService";
import { BuddyService } from "../services/buddyService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { Buddy } from "../models/buddy";

export class BuddyController {
    private constructor() {}
  
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
    try{
        let buddyData: Buddy = {
        HomeTown: req.body.homeTown,
        TeamId: req.body.teamId,
        UserId: req.body.userId,
        IsActive: req.body.isActive,
        State: req.body.state,
        Country: req.body.country,
        MobileNum: req.body.mobileNum,
        ParentId: req.body.parentId,
        CreatedDate: req.body.createdDate,
        BuddyRole: req.body.buddyRole,
        
      };
      console.log
      const result = await this.buddyService.postBuddy(buddyData);
  
      if (result) {
        HttpResponseMessage.successResponse(res, "Sucessfull");
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
      }
    }catch (err) {
      HttpResponseMessage.sendErrorResponse(res, err);
    }

  }

  /**
   * Get tasks for buddy
   * TODO the functionality
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
  public async listTasks(req: Request, res: Response, next: NextFunction) {
  
      const result = await this.buddyService.listTasks();

      try{
        HttpResponseMessage.successResponseWithData(res, "Sucessfull",result);
      }
      catch(error){
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed",error);
      }
  }


}