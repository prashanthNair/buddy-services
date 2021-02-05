import { BuddyUser } from "../models/buddyUser";
import { IBuddyUserService } from "./IBuddyUserService";
import { db } from "../configuration/db.config";

class BuddyUserService implements IBuddyUserService {
    private constructor() {}
    private static instance: IBuddyUserService = null;
  
    static getInstance() {
      if (!BuddyUserService.instance) {
        BuddyUserService.instance = new BuddyUserService();
      }
      return BuddyUserService.instance;
    }
    public async postBuddyUser(buddyUserData: BuddyUser): Promise<BuddyUser> {
        try {
          let buddyUser: BuddyUser = {
              HomeTown:buddyUserData.HomeTown,
              TeamId:buddyUserData.TeamId,
              UserId: buddyUserData.UserId,
              IsActive:buddyUserData.IsActive,
              State:buddyUserData.State,
              Country:buddyUserData.Country,
              MobileNum:buddyUserData.MobileNum,
              ParentId:buddyUserData.ParentId,
              CreatedDate:buddyUserData.CreatedDate,
              BuddyRole:buddyUserData.BuddyRole,
              UserName:buddyUserData.UserName,
              FirstName:buddyUserData.FirstName,
              LastName:buddyUserData.LastName,
              Password:buddyUserData.Password,
              Location:buddyUserData.Location,
              Email:buddyUserData.Email,
              RoleId: buddyUserData.RoleId,
              RoleName:buddyUserData.RoleName,
              Status: buddyUserData.Status
          };
          let sql = `CALL PostBuddyUser(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
          let result = await db.query(sql, [
            buddyUser.HomeTown,
            buddyUser.TeamId,
            buddyUser.UserId,
            buddyUser.IsActive,
            buddyUser.State,
            buddyUser.Country,
            buddyUser.MobileNum,
            buddyUser.ParentId,
            buddyUser.CreatedDate,
            buddyUser.BuddyRole,
            buddyUser.UserName,
            buddyUser.FirstName,
            buddyUser.LastName,
            buddyUser.Password,
            buddyUser.Location,
            buddyUser.Email,
            buddyUser.RoleId,
            buddyUser.RoleName,
            buddyUser.Status
          ]);
          console.log(result);
          return result;
          
        } catch (error) {
          return error
          
        }
      }
}
export { BuddyUserService };