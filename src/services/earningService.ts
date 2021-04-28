import { Buddy, Task, BuddyLink } from "../models/buddy";
import { db } from "../configuration/db.config";
import { IBuddyService } from "./IBuddyService";
import { IEarningService } from "./IEarningServie";

export class EarningService implements IEarningService {
  private constructor() { }

  private static instance: IEarningService = null;

  static getInstance() {
    if (!EarningService.instance) {
      EarningService.instance = new EarningService();
    }
    return EarningService.instance;
  }
  public async listAllEarnings(buddyId: any): Promise<Object> {
    try {
      let sql = `CALL GetTeamMembersDetails(?)`;
      const [rows, fields] = await db.query(sql, buddyId);
      const [tasks] = rows;
      return <Task>tasks;
    } catch (err) {
      throw err
    }
  }
}