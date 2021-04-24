import { User } from "../models/userReference";
import { IUserReferenceService } from "./IUserReferenceService";
import { db } from "../configuration/db.config";

class UserReferenceService implements IUserReferenceService {
    private constructor() {}
    private static instance: IUserReferenceService = null;
  
    static getInstance() {
      if (!UserReferenceService.instance) {
        UserReferenceService.instance = new UserReferenceService();
      }
      return UserReferenceService.instance;
    }
    public async postUserReference(userData: User): Promise<User> {
        try {
          let user: User = {
            MobileNum:userData.MobileNum
          };
      
          let sql = `CALL PostUserReference(?)`;
          let result = await db.query(sql, [
            user.MobileNum
          ]);
          console.log(result);
          return result;
          
        } catch (error) {
          return error
          
        }
      }
}
export { UserReferenceService };
