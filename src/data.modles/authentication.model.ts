import { User } from "../models/user";
import { db } from "../configuration/db.config";

class AuthenticationModel {
  public async register(userData: User) {
    let user: User = {
      UserId : userData.UserId,
      UserName: userData.UserName,
      FirstName: userData.FirstName,
      LastName: userData.LastName,
      Password: userData.Password,
      Location: userData.Location,
      IsActive: userData.IsActive,
      IsDeleted: userData.IsDeleted,
      ProfilePic: userData.ProfilePic,
      State: userData.State,
      Country: userData.Country,
      Email: userData.Email,
      MobileNum: userData.MobileNum,
    };

    let sql = `CALL PostUser(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    let result = await db.query(sql, [
      user.UserId,
      user.UserName,
      user.FirstName,
      user.LastName,
      user.Password,
      user.Location,
      user.IsActive,
      user.IsDeleted,
      user.ProfilePic,
      user.State,
      user.Country,
      user.Email,
      user.MobileNum,
    ]);
    console.log(result);
    return result;
  }
}
