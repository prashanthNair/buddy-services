import { BuddyInventory } from "../models/buddyInventory";
import { db } from "../configuration/db.config";
import { IBuddyInventoryService } from "./IBuddyInventoryService";

class BuddyInventoryService implements IBuddyInventoryService {
    private constructor() {}
  
    private static instance: IBuddyInventoryService = null;
  
    static getInstance() {
      if (!BuddyInventoryService.instance) {
        BuddyInventoryService.instance = new BuddyInventoryService();
      }
      return BuddyInventoryService.instance;
    }
  
    public async postBuddyInventory(buddyInventoryData: BuddyInventory): Promise<BuddyInventory> {
        try {
            
            let buddyInventory: BuddyInventory = {
              ProductId: buddyInventoryData.ProductId,
              Type: buddyInventoryData.Type,
              ProductCategory: buddyInventoryData.ProductCategory,
              CreatedDate: buddyInventoryData.CreatedDate,
              IsAvailable: buddyInventoryData.IsAvailable,
              BuddyMargin: buddyInventoryData.BuddyMargin,
             };
        
            let sql = `CALL PostBuddyInventory(?,?,?,?,?,?)`;
            let result = await db.query(sql, [
              buddyInventory.ProductId,
              buddyInventory.Type,
              buddyInventory.ProductCategory,
              buddyInventory.CreatedDate,
              buddyInventory.IsAvailable,
              buddyInventory.BuddyMargin
            ]);
            console.log(result);
            return result;
            
        } catch (err) {
            return err;
          }
    }

}
export { BuddyInventoryService };