// import { logModel } from "../models/logModel";

  
 
export class Logger {

    public static error(message: String, error?: Error): void {
        this.savelog(message, message, 'error', error)
    }

    public static info(message: String, error?: Error): void {
        this.savelog(message, message, 'info', error)
    }

    public static warn(message: String, error?: Error): void {
        this.savelog(message, message, 'warn', error)
    }

    public static log(message: String, error?: Error): void {
        this.savelog(message, message, 'error', error)
    }

    /* implent the api to push the logs to db
    */
    private static savelog(message: String, decription: String, status: String, error?: Error): void {
 
    }

}
 
export default Logger
