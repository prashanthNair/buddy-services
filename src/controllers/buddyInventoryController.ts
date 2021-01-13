import { Request, Response, NextFunction } from "express";
import { IBuddyInventoryService } from "../services/IBuddyInventoryService";
import { BuddyInventoryService } from "../services/buddyInventoryService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { BuddyInventory } from "../models/buddyInventory";

export class BuddyInventoryController {
    private constructor() {}
  
    private static instance: BuddyInventoryController = null;
    private buddyInventoryService = null;
  
    /**
     * To get singleton instance
     *
     * @param  {object} buddyInventoryService
     */
  
    public static getInstance(
        buddyInventoryService: IBuddyInventoryService = BuddyInventoryService.getInstance()
    ) {
      if (!BuddyInventoryController.instance) {
        BuddyInventoryController.instance = new BuddyInventoryController();
      }
      BuddyInventoryController.instance.buddyInventoryService = buddyInventoryService; 
      return BuddyInventoryController.instance;
    }
    /**
   * Insert into buddyInventory coloumn
   * TODO the functionality
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
  public async postBuddyInventory(req: Request, res: Response, next: NextFunction) {

    let buddyInventoryData: BuddyInventory = {
        ProductId: req.body.productId,
        Type: req.body.type,
        ProductCategory: req.body.productCategory,
        CreatedDate: req.body.createdDate,
        IsAvailable: req.body.isAvailable,
        BuddyMargin: req.body.buddyMargin,
        };
      console.log
      const result = await this.buddyInventoryService.postBuddyInventory(buddyInventoryData);

      if (result) {
        HttpResponseMessage.successResponse(res, "Sucessfull");
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
      }

  }

}