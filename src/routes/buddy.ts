import {Request, Response, NextFunction} from "express";
import { BuddyController } from "../controllers/buddyController";

const buddyRoutes = (app, buddyController: BuddyController = BuddyController.getInstance()) => {

    app.route('/api/v1/buddy/register')
    .post(async (req: Request,
        res: Response,
        next: NextFunction) =>
        await buddyController.postBuddy(req, res,next)
    ) 


}
export default buddyRoutes;