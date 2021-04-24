import { Request, Response, NextFunction } from "express";
import { IBuddyUserService } from "../services/IBuddyUserService";
import { BuddyUserService } from "../services/buddyUserService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { BuddyUser } from "../models/buddyUser";

export class BuddyUserController {
    private constructor() {}
  
    private static instance: BuddyUserController = null;
    private buddyUserService = null;
  
    /**
     * To get singleton instance
     *
     * @param  {object} roleService
     */
  
    public static getInstance(
        buddyUserService: IBuddyUserService = BuddyUserService.getInstance()
    ) {
      if (!BuddyUserController.instance) {
        BuddyUserController.instance = new BuddyUserController();
      }
      BuddyUserController.instance.buddyUserService = buddyUserService; // mock service Object is passed as a param from .spec
      return BuddyUserController.instance;
    }
/**
   * Insert into Buddy table, User table and Role table
   * TODO the functionality
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
  public async postBuddyUser(req: Request, res: Response, next: NextFunction) {
    try{
      let buddyUserData: BuddyUser = {
          HomeTown:req.body.homeTown,
          TeamId:req.body.teamId,
          UserId: req.body.userId,
          IsActive:req.body.isActive,
          State:req.body.state,
          Country:req.body.country,
          MobileNum:req.body.mobileNum,
          ParentId:req.body.parentId,
          CreatedDate:req.body.createdDate,
          BuddyRole:req.body.buddyRole,
          UserName:req.body.userName,
          FirstName:req.body.firstName,
          LastName:req.body.lastName,
          Password:req.body.password,
          Location:req.body.location,
          Email:req.body.email,
          RoleId: req.body.roleId,
          RoleName: req.body.roleName,
          Status: req.body.status
        };
        
      const result = await this.buddyUserService.postBuddyUser(buddyUserData);

      if (result) {
        HttpResponseMessage.successResponse(res, "Sucessfull");
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
      }
    }catch (err) {
      HttpResponseMessage.sendErrorResponse(res, err);
    }
  }
}