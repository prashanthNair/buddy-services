import { NextFunction,Request,Response } from "express"
import { EarningController } from "../controllers/earningController" 

const earningRoutes = (app, earningController: EarningController = EarningController.getInstance()) => {

    
  /**
   * @swagger
   * /api/v1/earnings/{buddyId}:
   *   get:
   *     summary: API to GET all team member details.
   *     parameters:
   *       - in: path
   *         name: buddyId
   *         required: true
   *         description: buddyId of the user
   *         schema:
   *           type: integer
   *           
   *     responses:
   *       201:
   *         description:  User is valid
   *         content:
   *           application/json:
   *             schema:
   *               allOf:
   *                 - $ref: '#/components/schemas/SuccessResponse'
   *                 - type: object
   *                   properties:
   *                     data:
   *                       type: object
   *                       properties:
   *                         buddyId:
   *                           type: integer
   *                           description: Mobile Number of the user
   *                           example: +911234567890
   *               
   *       500:
   *         $ref: '#/components/responses/FailureError'
   *       400:
   *         $ref: '#/components/responses/BadRequest'
   *       
   *                 
  */
app.route('/api/v1/earnings/:buddyId')
.get(async (req: Request,
    res: Response,
    next: NextFunction) =>
    await earningController.listAllEarnings(req, res,next))
}

export default earningRoutes