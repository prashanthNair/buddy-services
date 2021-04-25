"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = void 0;
class LogService {
    constructor() { }
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
    createlog(logObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let log = logObj;
                return log;
            }
            catch (error) {
            }
        });
    }
}
exports.LogService = LogService;
LogService.instance = null;
//# sourceMappingURL=logService.js.map