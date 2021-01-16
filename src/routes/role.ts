import {Request, Response, NextFunction} from "express";
import { RoleController } from "../controllers/roleController";

const roleRoutes = (app, roleController: RoleController = RoleController.getInstance()) => {

    app.route('/api/v1/role/register')
    .post(async (req: Request,
        res: Response,
        next: NextFunction) =>
        await roleController.postRole(req, res,next)
    ) 
}
export default roleRoutes;