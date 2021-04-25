import { Request, Response, NextFunction } from "express";
import { format } from "path";
import { AuthController } from "../controllers/authController";
import { BuddyUserController } from "../controllers/buddyUserController";
import { UserReferenceController } from "../controllers/userReferenceController";
import { User } from "../models/userReference";


const { body, validationResult, checkSchema, buildCheckFunction, check } = require('express-validator');
const checkBodyAndQuery = buildCheckFunction(['query']);
const authRoutes = (
  app,
  authController: AuthController = AuthController.getInstance(),
  buddyUserController: BuddyUserController = BuddyUserController.getInstance(),
  userReferenceController: UserReferenceController = UserReferenceController.getInstance()
) => {

  /**
   * @swagger
   * /:
   *   get:
   *     summary: Login Page.
   *        
   *     responses:
   *       201:
   *         description: Login Page successfully retrieved        
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */

  app
    .route("/")
    .get(
      (req: Request, res: Response, next: NextFunction) =>
        res.send("Welcome to Migobucks")
    );

  /**
   * @swagger
   * /api/v1/auth/initialRegister:
   *   post:
   *     summary: Register a user with mobile number .
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Initial_registration'
   *     responses:
   *       201:
   *         description: User registered successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessResponse'
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *                 
  */
  app
    .route("/api/v1/auth/initialRegister")
    .post(body('mobileNum').isLength({ min: 10, max: 13 }),
      async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          console.log("Invalid length " + JSON.stringify(req.body));
          return res.status(400).json({ errors: errors.array() });
        }
        await userReferenceController.postUserReference(req, res, next)
      }

    );
  /**
   * @swagger
   * /api/v1/auth/initialRegister/{mobileNum}:
   *   get:
   *     summary: API to check if the user exist.
   *     parameters:
   *       - in: path
   *         name: mobileNum
   *         required: true
   *         description: Mobile Number of the user account
   *         schema:
   *           type: integer
   *           
   *     responses:
   *       201:
   *         description:  User is valid
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
   *                         mobileNum:
   *                           type: integer
   *                           description: Mobile Number of the user
   *                           example: +911234567890
   *               
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */

  app
    .route("/api/v1/auth/initialRegister/:mobileNum")
    .get(
      async (req: Request, res: Response, next: NextFunction) =>
        await authController.getUser(req, res, next)
    );


  /**
   * @swagger
   * /api/v1/auth/initialRegister/{mobileNum}:
   *   put:
   *     summary: Register a user.
   *     parameters:
   *       - in: path
   *         name: mobileNum
   *         required: true
   *         description: Mobile Number of the user account
   *         schema:
   *           type: integer       
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/InitialUser'
   *     responses:
   *       201:
   *         description: User registered successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessResponse'
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *                 
  */
  app
    .route("/api/v1/auth/initialRegister/:mobileNum/")
    .put(check('mobileNum').isLength({ min: 10, max: 13 }),
      body('password').isLength({ min: 7 }), body('email').isEmail(),
      async (req: Request, res: Response, next: NextFunction) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        await authController.postUser(req, res, next)
      }
    );

  /**
   * @swagger
   * /api/v1/auth/buddyUserRegister:
   *   post:
   *     summary: Register a buddy user.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/BuddyUser'
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
    .route("/api/v1/auth/buddyUserRegister")
    .post(
      async (req: Request, res: Response, next: NextFunction) =>
        await buddyUserController.postBuddyUser(req, res, next)
    );
  /**
   * @swagger
   * /api/v1/auth/user:
   *   get:
   *     summary: Show user details.
   *     parameters:
   *       - in: query
   *         name: id
   *         required: true
   *         description: ID of the User account
   *         schema:
   *           type: string
   *     responses:
   *       201:
   *         $ref: '#/components/responses/Success'
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */

  app
    .route("/api/v1/auth/user/")
    .get(
      async (req: Request, res: Response, next: NextFunction) =>
        await authController.getdetails(req, res, next)
    );

  /**
   * @swagger
   * /api/v1/auth/user/{email}/{password}:
   *   get:
   *     summary: Show buddy user details.
   *     parameters:
   *       - in: path
   *         name: email
   *         required: true
   *         description: Email ID of the buddy user account
   *         schema:
   *           type: string
   *       - in: path
   *         name: password
   *         required: true
   *         description: Password of the buddy user account
   *         schema:
   *           type: string
   *           
   *     responses:
   *       201:
   *         description: Buddy user details successfully retrieved
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
   *                           description: Email of the Valid user
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
