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
  app
    .route("/")
    .get(
       (req: Request, res: Response, next: NextFunction) =>
        res.send("Welcome to Migobucks")
    );
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
