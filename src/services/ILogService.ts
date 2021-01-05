import { User } from "../models/user";
import { Log } from "../models/log";

export interface ILogService {
    createlog(logObj: Log): Promise<Log>; 
}