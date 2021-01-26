import {Request, Response, NextFunction} from "express";
import { BuddyInventoryController } from "../controllers/buddyInventoryController";

const buddyInventoryRoutes = (app, buddyInventoryController: BuddyInventoryController = BuddyInventoryController.getInstance()) => {

    app.route('/api/v1/buddyInventory/register')
    .post(async (req: Request,
        res: Response,
        next: NextFunction) =>
        await buddyInventoryController.postBuddyInventory(req, res,next)
    ) 


}
export default buddyInventoryRoutes;