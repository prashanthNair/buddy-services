import { Update, User } from "../models/user";
import { IAuthService } from "./IAuthService";
import { db } from "../configuration/db.config";
import { integer } from "aws-sdk/clients/cloudfront";

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
      const [rows, fields] = await db.query(sql, userId);
      return rows;
    } catch (error) {
      return null;
    }
  }
  public async getUser(mobileNum: string): Promise<User> {
    try {
      let sql = `CALL GetUser(?)`;
      const [rows, fields] = await db.query(sql, mobileNum);
      return rows;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  public async postUser(userData: User): Promise<User> {
    try{
      let user: User = {
        UserId: userData.UserId,
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
  
      let sql = `CALL PostUser(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
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
      console.log(result,);
      return result;

    }catch (err) {
      return err;
    }
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
    try{

      let user: Update = {
        email: userData.email,
        password: userData.password,
      };
      let result = await db.query(
        `UPDATE user SET password = ? WHERE email = ? `,
        user
      );
      console.log(result);
      return result;
    }catch (err) {
      return err;
    }
  } 
  }

export { AuthService };
