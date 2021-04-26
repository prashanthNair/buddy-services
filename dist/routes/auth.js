"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("../controllers/authController");
const buddyUserController_1 = require("../controllers/buddyUserController");
const userReferenceController_1 = require("../controllers/userReferenceController");
const { body, validationResult, checkSchema, buildCheckFunction, check } = require('express-validator');
const checkBodyAndQuery = buildCheckFunction(['query']);
const authRoutes = (app, authController = authController_1.AuthController.getInstance(), buddyUserController = buddyUserController_1.BuddyUserController.getInstance(), userReferenceController = userReferenceController_1.UserReferenceController.getInstance()) => {
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
        .get((req, res, next) => res.send("Welcome to Migobucks"));
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
        .post(body('mobileNum').isLength({ min: 10, max: 13 }), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("Invalid length " + JSON.stringify(req.body));
            return res.status(400).json({ errors: errors.array() });
        }
        yield userReferenceController.postUserReference(req, res, next);
    }));
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
        .get((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield authController.getUser(req, res, next); }));
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
        .put(check('mobileNum').isLength({ min: 10, max: 13 }), body('password').isLength({ min: 7 }), body('email').isEmail(), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        yield authController.postUser(req, res, next);
    }));
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
        .post((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield buddyUserController.postBuddyUser(req, res, next); }));
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
        .get((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield authController.getdetails(req, res, next); }));
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
        .get((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield authController.getdetails(req, res, next); }));
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
        .get((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield authController.login(req, res, next); }));
    app
        .route("/api/v1/auth/update")
        .put((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield authController.update(req, res, next); }));
};
exports.default = authRoutes;
//# sourceMappingURL=auth.js.map