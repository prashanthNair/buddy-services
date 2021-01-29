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
 *         $ref: '#/components/responses/FailureError'
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

    /**
 * @swagger
 * /api/v1/auth/login/{email}/{password}:
 *   get:
 *     summary: Login a buddy user.
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Email ID of the buddy user
 *         schema:
 *           type: string
 *       - in: path
 *         name: password
 *         required: true
 *         description: password of the buddy user account
 *         schema:
 *           type: string
 *           
 *     responses:
 *       201:
 *         description: Buddy user login successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: object
 *                       properties:
 *                         email:
 *                           type: string
 *                           description: Email of the successfully logedin user
 *                           example: buddy@migobucks.com
 *               
 *       500:
 *         $ref: '#/components/responses/FailureError'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       
 *                 
*/

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
