import {Request, Response, NextFunction} from "express";
import { AuthController } from "../controllers/authController";

const authRoutes = (app, authController: AuthController = AuthController.getInstance()) => {
 
        app.route('/api/v1/auth/register')
        .post(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await authController.postUser(req, res,next)
        ) 
        app.route('/api/v1/auth/test')
        .get(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await authController.getdetails(req, res,next)
        )

        app.route('/api/v1/auth/login')
        .get(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await authController.login(req, res,next)
        )

        app.route('/api/v1/auth/update')
        .put(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await authController.update(req, res,next)
        )


}

export default authRoutes;