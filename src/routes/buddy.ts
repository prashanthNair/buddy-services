import {Request, Response, NextFunction} from "express";
import { BuddyController } from "../controllers/buddyController";

const buddyRoutes = (app, buddyController: BuddyController = BuddyController.getInstance()) => {
/**
 * @swagger
 * /api/v1/buddy/register:
 *   post:
 *     summary: Register a user into buddy table Only .
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Buddy'
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
    app.route('/api/v1/buddy/register')
    .post(async (req: Request,
        res: Response,
        next: NextFunction) =>
        await buddyController.postBuddy(req, res,next)
    ) 

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: List the tasks.
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
    app.route('/api/v1/tasks')
    .get(async (req: Request,
        res: Response,
        next: NextFunction) =>
        await buddyController.listTasks(req, res,next))

}
export default buddyRoutes;