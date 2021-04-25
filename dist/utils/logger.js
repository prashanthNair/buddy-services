"use strict";
// import { logModel } from "../models/logModel";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static error(message, error) {
        this.savelog(message, message, 'error', error);
    }
    static info(message, error) {
        this.savelog(message, message, 'info', error);
    }
    static warn(message, error) {
        this.savelog(message, message, 'warn', error);
    }
    static log(message, error) {
        this.savelog(message, message, 'error', error);
    }
    /* implent the api to push the logs to db
    */
    static savelog(message, decription, status, error) {
    }
}
exports.Logger = Logger;
exports.default = Logger;
//# sourceMappingURL=logger.js.map