import { User } from "../models/user";
import { db } from "../configuration/db.config";

class AuthenticationModel {
  public async register(userData: User) {
    let user: User = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      isActive: userData.isActive,
      mobileNum: userData.mobileNum,
      location: userData.mobileNum,
    };
    return await db.query("INSERT INTO user set ?", user);
  }
}
