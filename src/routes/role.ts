import {Request, Response, NextFunction} from "express";
import { RoleController } from "../controllers/roleController";

const roleRoutes = (app, roleController: RoleController = RoleController.getInstance()) => {
/**
 * @swagger
 * /api/v1/role/register:
 *   post:
 *     summary: Register into role table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       201:
 *         description: Role added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       500:
 *         $ref: '#/components/responses/FailureError'
 *                 
*/
    app.route('/api/v1/role/register')
    .post(async (req: Request,
        res: Response,
        next: NextFunction) =>
        await roleController.postRole(req, res,next)
    ) 
}
export default roleRoutes;