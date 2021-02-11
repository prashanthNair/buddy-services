import {Request, Response, NextFunction} from "express";
import { BuddyController } from "../controllers/buddyController";

const buddyRoutes = (app, buddyController: BuddyController = BuddyController.getInstance()) => {
/**
 * @swagger
 * /api/v1/buddy/register/{buddyId}:
 *   put:
 *     summary: Register a Buddy user.
 *     parameters:
 *       - in: path
 *         name: buddyId
 *         required: true
 *         description: Buddy Id of the user account
 *         schema:
 *           type: integer
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
    app.route('/api/v1/buddy/register/:buddyId/')
    .put(async (req: Request,
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