
import { User } from "../models/user";
import { IAuthService } from "./IAuthService";
import { Document } from "mongoose";
import { db } from "../configuration/db.config";
import { ILogService } from "./ILogService";
import { Log } from "../models/log"; 

class LogService implements ILogService {

    private constructor() { }

    private static instance: ILogService = null;

    static getInstance() {

        if (!LogService.instance) {
            LogService.instance = new LogService();
        }
        return LogService.instance;
    }

   /**
   *TODO: implement the api to log
   * 
   */
    public async createlog(logObj: Log): Promise<Log> {
        try {
            let log: Log = logObj; 
             return log;
        } catch (error) {

        } 
    }

}

export { LogService }

