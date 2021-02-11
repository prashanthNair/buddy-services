import { Buddy,Task } from "../models/buddy";
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
      
      let buddy: Buddy = {
        BuddyId: buddyData.BuddyId,
        HomeTown: buddyData.HomeTown,
        TeamId: buddyData.TeamId,
        UserId: buddyData.UserId,
        IsActive: buddyData.IsActive,
        State: buddyData.State,
        Country: buddyData.Country,
        MobileNum: buddyData.MobileNum,
        ParentId: buddyData.ParentId,
        CreatedDate:buddyData.CreatedDate,
        BuddyRole: buddyData.BuddyRole,
      };
  
      let sql = `CALL PostBuddy(?,?,?,?,?,?,?,?,?,?,?)`;
      let result = await db.query(sql, [
        buddy.BuddyId,
        buddy.HomeTown,
        buddy.TeamId,
        buddy.UserId,
        buddy.IsActive,
        buddy.State,
        buddy.Country,
        buddy.MobileNum,
        buddy.ParentId,
        buddy.CreatedDate,
        buddy.BuddyRole 
      ]);
      console.log(result);
      return result;
    } catch (error) {
      return error
    }
  }

  public async listTask(): Promise<Task> {
    let sql = `CALL GetBuddyInventoryProducts(?)`;
      const [rows, fields] = await db.query(sql);
      return <Task> rows;
  }
}

export { BuddyService };
