import { Buddy,Task,BuddyLink } from "../models/buddy";
import { db } from "../configuration/db.config";
import { IBuddyService } from "./IBuddyService";

class BuddyService implements IBuddyService {
  private constructor() {}

  private static instance: IBuddyService = null;

  static getInstance() {
    if (!BuddyService.instance) {
      BuddyService.instance = new BuddyService();
    }
    return BuddyService.instance;
  }

  public async postBuddy(buddyData: Buddy): Promise<Buddy> {
    try {
      
      let buddy: BuddyLink = {
        ParentId: buddyData.ParentId,
        MobileNum: buddyData.MobileNum,
        BuddyRole: buddyData.BuddyRole,
      };
  
      let sql = `CALL PostBuddy(?,?,?)`;
      let result = await db.query(sql, [
        buddy.ParentId,
        buddy.MobileNum,
        buddy.BuddyRole,
      ]);
      console.log(result);
      return result;
    } catch (error) {
      return error
    }
  }

  public async listTasks(): Promise<Task> {
    let sql = `CALL GetBuddyInventoryProducts()`;
      const [rows, fields] = await db.query(sql);
      const [tasks] = rows;
      return <Task> tasks;
  }
}

export { BuddyService };
