import {Request, Response, NextFunction} from "express";
import { BuddyInventoryController } from "../controllers/buddyInventoryController";

const buddyInventoryRoutes = (app, buddyInventoryController: BuddyInventoryController = BuddyInventoryController.getInstance()) => {
/**
 * @swagger
 * /api/v1/buddyInventory/register:
 *   post:
 *     summary: Register Product into Buddy Inventory table.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Buddy_Inventory'
 *     responses:
 *       201:
 *         description: Product added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       500:
 *         $ref: '#/components/responses/FailureError'
 *                 
*/
    app.route('/api/v1/buddyInventory/register')
    .post(async (req: Request,
        res: Response,
        next: NextFunction) =>
        await buddyInventoryController.postBuddyInventory(req, res,next)
    ) 


}
export default buddyInventoryRoutes;