import {Request, Response, NextFunction} from "express";
import { BuddyController } from "../controllers/buddyController";

const buddyRoutes = (app, buddyController: BuddyController = BuddyController.getInstance()) => {
/**
 * @swagger
 * /api/v1/buddy/register/{parentId}/{mobileNum}/{buddyRole}:
 *   post:
 *     summary: Register a Buddy user.
 *     parameters:
 *       - in: path
 *         name: parentId
 *         required: true
 *         description: Id of the user account
 *         schema:
 *           type: integer
 *       - in: path
 *         name: mobileNum
 *         required: true
 *         description: New Mobile Number of the user.
 *         schema:
 *           type: integer
 *       - in: path
 *         name: buddyRole
 *         required: true
 *         description: Role Name of the buddy user.
 *         schema:
 *           type: string
 *     responses:
 *       500:
 *         $ref: '#/components/responses/FailureError'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *                 
*/
    app.route('/api/v1/buddy/register/:parentId/:mobileNum/:buddyRole')
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