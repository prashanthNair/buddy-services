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
const db_config_1 = require("../configuration/db.config");
class AuthenticationModel {
    register(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = {
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
            let sql = `CALL PostUser(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            let result = yield db_config_1.db.query(sql, [
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
            console.log(result);
            return result;
        });
    }
}
//# sourceMappingURL=authentication.model.js.map