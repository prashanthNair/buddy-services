import { Request, Response, NextFunction } from "express";
import { IUserReferenceService } from "../services/IUserReferenceService";
import { UserReferenceService } from "../services/userReferenceService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { User } from "../models/userReference";

export class UserReferenceController {
  private constructor() {}

  private static instance: UserReferenceController = null;
  private userReferenceService = null;

  /**
   * To get singleton instance
   *
   * @param  {object} userReferenceService
   */

  public static getInstance(
    userReferenceService: IUserReferenceService = UserReferenceService.getInstance()
  ) {
    if (!UserReferenceController.instance) {
      UserReferenceController.instance = new UserReferenceController();
    }
    UserReferenceController.instance.userReferenceService = userReferenceService; // mock service Object is passed as a param from .spec
    return UserReferenceController.instance;
  }
  /**
   * Insert into user Reference table
   * TODO the functionality
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
  public async postUserReference(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      let userData: User = {
        MobileNum: req.body.mobileNum,
      };
      const result = await this.userReferenceService.postUserReference(
        userData
      );
      if (result.errno) {
        HttpResponseMessage.sendErrorResponse(res,result);
      } else {
        HttpResponseMessage.successResponse(res, "Sucessfull");
      }
    } catch (err) {
      HttpResponseMessage.sendErrorResponse(res, err);
    }
  }
}
