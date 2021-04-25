import { Request, Response, NextFunction } from "express";
import { IAuthService } from "../services/IAuthService";
import { AuthService } from "../services/authService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { InitialUser, Update, User } from "../models/user";
import { body } from "express-validator";

class SuccessResponse {
  status: Number;
  success: Boolean;
}

export class AuthController {
  private constructor() { }

  private static instance: AuthController = null;
  private authService = null;

  /**
   * To get singleton instance
   *
   * @param  {object} authService
   */

  public static getInstance(
    authService: IAuthService = AuthService.getInstance()
  ) {
    if (!AuthController.instance) {
      AuthController.instance = new AuthController();
    }
    AuthController.instance.authService = authService; // mock service Object is passed as a param from .spec
    return AuthController.instance;
  }

  /**
   * Basic AuthenticationS
   *
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      // validate the user credential
      if (
        req.params &&
        (req.params.email.length == 0 || req.params.password.length == 0)
      ) {
        return HttpResponseMessage.validationErrorWithData(
          res,
          "Login Failed",
          req
        );
      }

      const result = await this.authService.login(
        req.params.email,
        req.params.password
      );

      if (result) {
        HttpResponseMessage.successResponseWithData(
          res,
          "Login Sucessfull",
          result
        );
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Login Failed");
      }
    } catch (err) {
      HttpResponseMessage.sendErrorResponse(res, err);
    }
  }

  public async postUser(req: Request, res: Response, next: NextFunction) {
    try {

      let userData: InitialUser = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Password: req.body.Password,
        Email: req.body.Email,
        MobileNum: req.params.mobileNum,
        Gender:req.body.Gender,
        DOB:req.body.DOB,
        BuddyRole:req.body.BuddyRole,
        ParentId:req.body.ParentId
      };
      const result = await this.authService.postUser(userData, req.params.mobileNum);

      if (result.errno) {
        HttpResponseMessage.sendErrorResponse(res,result);
      } else {
        HttpResponseMessage.successResponse(res, "Sucessfull");
      }
    } catch (err) {
      HttpResponseMessage.sendErrorResponse(res, err);
    }
  }

  /**
   * db connect test api
   * my sql db instance created in aws lightsail
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
  public async getdetails(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.authService.getUsers(req.query.id); // :TODO remove hardcode
      if (result) {
        HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
      }
    } catch (err) {
      HttpResponseMessage.sendErrorResponse(res, err);
    }
  }

  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      // validate the Mobile Number
      if (
        req.params.mobileNum.length == 13
      ) {
        return HttpResponseMessage.validationErrorWithData(
          res,
          "Invalid Mobile Number",
          req
        );
      }
      const result = await this.authService.getUser(req.params.mobileNum);
      if (result) {
        HttpResponseMessage.successResponseWithData(res, "User is valid", result);
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Invalid User");
      }
    } catch (err) {
      HttpResponseMessage.sendErrorResponse(res, err);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      // validate the user credential
      if (
        req.body &&
        (req.body.email.length == 0 || req.body.password.length == 0)
      ) {
        return HttpResponseMessage.validationErrorWithData(
          res,
          "Invalid inputs",
          req
        );
      }

      let userData: Update = {
        email: req.body.Email,
        password: req.body.Password,
      };
      const result = await this.authService.update(userData);

      if (result) {
        HttpResponseMessage.successResponse(res, "Sucessfully updated");
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
      }
    } catch (error) {
      HttpResponseMessage.sendErrorResponse(res, "Transaction 'Failed", error);
    }
  }
}
//Updated 