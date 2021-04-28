import { NextFunction,Request,Response } from "express"
import { TaskController } from "../controllers/taskController"

const taskRoutes = (app, taskController: TaskController = TaskController.getInstance()) => {
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
    await taskController.listTasks(req, res,next))
}