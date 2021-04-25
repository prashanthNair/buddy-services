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
exports.UserReferenceService = void 0;
const db_config_1 = require("../configuration/db.config");
class UserReferenceService {
    constructor() { }
    static getInstance() {
        if (!UserReferenceService.instance) {
            UserReferenceService.instance = new UserReferenceService();
        }
        return UserReferenceService.instance;
    }
    postUserReference(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = {
                    MobileNum: userData.MobileNum
                };
                let sql = `CALL PostUserReference(?)`;
                let result = yield db_config_1.db.query(sql, [
                    user.MobileNum
                ]);
                console.log(result);
                return result;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.UserReferenceService = UserReferenceService;
UserReferenceService.instance = null;
//# sourceMappingURL=userReferenceService.js.map