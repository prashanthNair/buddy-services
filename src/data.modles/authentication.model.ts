import { User } from "../models/user";
import { db } from "../configuration/db.config";

class AuthenticationModel {
  public async register(userData: User) {
    let user: User = {
      Name: userData.Name,
      Email: userData.Email,
      Password: userData.Password,
      IsActive: userData.IsActive,
      MobileNum: userData.MobileNum,
      Location: userData.Location,
    };

    let sql = `CALL PostUser(?,?,?,?,?,?)`;
    let result = await db.query(sql, [
      user.Name,
      user.Email,
      user.Password,
      user.IsActive,
      user.MobileNum,
      user.Location,
    ]);
    console.log(result);
    return result;
  }
}
