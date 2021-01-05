import { User } from "../models/user";
import { IAuthService } from "./IAuthService";
import { Document } from "mongoose";
import { db } from "../configuration/db.config";

class AuthService implements IAuthService {
  private constructor() {}
  getUserById(id: any) {
    throw new Error("Method not implemented.");
  }

  private static instance: IAuthService = null;

  static getInstance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

 /* Test method*/
   /* TODO remove hardcoded value and switch to sp*/
   public async getUsers(userId: string, password: string): Promise<User> {
    try { 
      let sql = `SELECT userId FROM user where userId=`+userId;
      const [rows, fields] = await db.query(sql); 
      console.log("service", rows);
      return rows;
    } catch (errpr) {
      return null;
    }
  }
  
  public async postUser(userData: User): Promise<User> {
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

  public async login(email: string, password: string): Promise<User> {
    try {
      const [rows, fields] = await db.query(
        "SELECT email from user where email = ? ",
        email
      );
      return <User>rows;
    } catch (errpr) {
      return null;
    }
  }
}

export { AuthService };
