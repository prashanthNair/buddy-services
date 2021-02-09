import { Request, Response, NextFunction } from "express";
import { IAuthService } from "../services/IAuthService";
import { AuthService } from "../services/authService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { Update, User } from "../models/user";

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

    let userData: User = {
      UserName: req.body.userName,
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      Password: req.body.password,
      Location: req.body.location,
      IsActive: true,
      IsDeleted: false,
      ProfilePic: req.body.profilePic,
      State: req.body.state,
      Country: req.body.country,
      Email: req.body.email,
      MobileNum: req.params.mobileNum,
      Created_date: null,
 
    };
    const result = await this.authService.postUser(userData,req.params.mobileNum);

    if (result) {
      HttpResponseMessage.successResponse(res, "Sucessfull");
    } else {
      HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
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
        email: req.body.email,
        password: req.body.password,
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
