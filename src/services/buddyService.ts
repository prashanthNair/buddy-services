
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

  public async listTask(): Promise<Object> {
    throw new Error("Method not implemented.");
  }
}
