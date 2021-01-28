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
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          userName:
 *            type: string
 *            description: User name for the buddy user, needs to be unique
 *          firstName:
 *            type: string
 *            description: First name of the buddy user
 *          lastName:
 *            type: string
 *            description: Last name of the buddy user
 *          password:
 *            type: string
 *            description: Password for the buddy user account
 *          location:
 *            type: string
 *            description: Current location of the buddy user
 *          state:
 *            type: string
 *            description: Residing state of the buddy user
 *          country:
 *            type: string
 *            description: Residing country of the buddy user
 *          email:
 *            type: string
 *            description: Email ID of the buddy user
 *            format: email
 *          mobileNum:
 *            type: integer
 *            description: Mobile number of the buddy user
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      SuccessResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *            description: Tells the state of the API is success/failure
 *          status:
 *            type: string
 *            description: Indicates the status of the API transaction
 *          message:
 *            type: string
 *            description: Message about the API transaction
 *
 */


 
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

  
  /**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a buddy user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Buddy user registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FailureResponse'
 *                 
*/
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
