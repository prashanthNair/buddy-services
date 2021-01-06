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
  public async getUsers(userId: string, password: string): Promise<User> {
    try { 
      let sql = `CALL GetUsers(?)`;
      const [rows, fields] = await db.query(sql,userId); 
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
      location: userData.location,
    };
    return await db.query("INSERT INTO user SET ?", user);
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
