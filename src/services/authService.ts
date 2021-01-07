import { Update, User } from "../models/user";
import { IAuthService } from "./IAuthService";
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
 
  public async getUsers(userId: string, password: string): Promise<User> {
    try { 
      let sql = `CALL GetUsers(?)`;
      const [rows, fields] = await db.query(sql,userId); 
      console.log("service", rows);
      return rows;
    } catch (error) {
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
    let sql = `CALL PostUser(?)`;
    let result = await db.query(sql,user);
    console.log(result);
    return result;
  }

  public async login(email: string, password: string): Promise<User> {
    try {
      const [rows, fields] = await db.query(
        "SELECT email from user where email = ? ",
        email
      );
      return <User>rows;
    } catch (error) {
      return null;
    }
  }

  public async update(userData: Update): Promise<Update> {
    let user: Update = {
      email: userData.email,
      password: userData.password,
      };
    let result = await db.query(`UPDATE user SET password = ? WHERE email = ? `, user);
    console.log(result);
    return result;
    
  }
}

export { AuthService };
