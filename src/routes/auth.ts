import { Request, Response, NextFunction } from "express";
import { format } from "path";
import { AuthController } from "../controllers/authController";
import {BuddyUserController} from "../controllers/buddyUserController";
import { UserReferenceController } from "../controllers/userReferenceController";

const authRoutes = (
  app,
  authController: AuthController = AuthController.getInstance(),
  buddyUserController:BuddyUserController= BuddyUserController.getInstance(),
  userReferenceController:UserReferenceController= UserReferenceController.getInstance()
) => {
  /**
   * @apiDefine successResponse
   * @apiSuccess {String} status=1 Status of API request
   * @apiSuccess {Boolean} success=true 
   * @apiSuccess {String} message="Sucessfull"
   * @apiSuccess {Object[]} data=[]
   */

   /**
   * @apiDefine errorResponse
   * @apiError {Integer} status=0 Status of API request
   * @apiError {Boolean} success=false
   * @apiError {String} message
   * @apiError {Object} error
   * @apiError {Integer} error.code=500 Error code
   * @apiError {String} error.message Error message
   * @apiError {Object} error.stackTrace Stacktrace of the error occured
   * @apiError {Object} error.params
   */
  app
    .route("/")
    .get(
       (req: Request, res: Response, next: NextFunction) =>
        res.send("Welcome to Migobucks")
    );
     /**
   * @api {post} /api/v1/auth/register
   * @apiGroup Authentication
   * @apiName Create Buddy
   * @apiDescription Register a buddy  
   * @apiParam (Body) {String} userName Username of the buddy.
   * @apiParam (Body) {String} firstName  Firstname of the buddy
   * @apiParam (Body) {String} lastName
   * @apiParam (Body) {String} password    
   * @apiParam (Body) {String} location
   * @apiParam (Body) {String} state
   * @apiParam (Body) {String} country
   * @apiParam (Body) {String} email
   * @apiParam (Body) {Integer} number    
   * @apiUse successResponse  
   * @apiUse errorResponse  
   */
  app
    .route("/api/v1/auth/initialRegister")
    .post(
      async (req: Request, res: Response, next: NextFunction) =>
        await userReferenceController.postUserReference(req, res, next)
    );
  app
    .route("/api/v1/auth/register")
    .post(
      async (req: Request, res: Response, next: NextFunction) =>
        await authController.postUser(req, res, next)
    );
  app
    .route("/api/v1/auth/buddyUserRegister")
    .post(
      async (req: Request, res: Response, next: NextFunction) =>
        await buddyUserController.postBuddyUser(req, res, next)
    );
  app
    .route("/api/v1/auth/user")
    .get(
      async (req: Request, res: Response, next: NextFunction) =>
        await authController.getdetails(req, res, next)
    );
  app
    .route("/api/v1/auth/user/:email/:password")
    .get(
      async (req: Request, res: Response, next: NextFunction) =>
        await authController.getdetails(req, res, next)
    );  
  app
    .route("/api/v1/auth/login/:email/:password")
    .get(
      async (req: Request, res: Response, next: NextFunction) =>
        await authController.login(req, res, next)
    );
  app
    .route("/api/v1/auth/update")
    .put(
      async (req: Request, res: Response, next: NextFunction) =>
        await authController.update(req, res, next)
    );
};

export default authRoutes;
