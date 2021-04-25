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
exports.BuddyUserService = void 0;
const db_config_1 = require("../configuration/db.config");
class BuddyUserService {
    constructor() { }
    static getInstance() {
        if (!BuddyUserService.instance) {
            BuddyUserService.instance = new BuddyUserService();
        }
        return BuddyUserService.instance;
    }
    postBuddyUser(buddyUserData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let buddyUser = {
                    HomeTown: buddyUserData.HomeTown,
                    TeamId: buddyUserData.TeamId,
                    UserId: buddyUserData.UserId,
                    IsActive: buddyUserData.IsActive,
                    State: buddyUserData.State,
                    Country: buddyUserData.Country,
                    MobileNum: buddyUserData.MobileNum,
                    ParentId: buddyUserData.ParentId,
                    CreatedDate: buddyUserData.CreatedDate,
                    BuddyRole: buddyUserData.BuddyRole,
                    UserName: buddyUserData.UserName,
                    FirstName: buddyUserData.FirstName,
                    LastName: buddyUserData.LastName,
                    Password: buddyUserData.Password,
                    Location: buddyUserData.Location,
                    Email: buddyUserData.Email,
                    RoleId: buddyUserData.RoleId,
                    RoleName: buddyUserData.RoleName,
                    Status: buddyUserData.Status
                };
                let sql = `CALL PostBuddyUser(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                let result = yield db_config_1.db.query(sql, [
                    buddyUser.HomeTown,
                    buddyUser.TeamId,
                    buddyUser.UserId,
                    buddyUser.IsActive,
                    buddyUser.State,
                    buddyUser.Country,
                    buddyUser.MobileNum,
                    buddyUser.ParentId,
                    buddyUser.CreatedDate,
                    buddyUser.BuddyRole,
                    buddyUser.UserName,
                    buddyUser.FirstName,
                    buddyUser.LastName,
                    buddyUser.Password,
                    buddyUser.Location,
                    buddyUser.Email,
                    buddyUser.RoleId,
                    buddyUser.RoleName,
                    buddyUser.Status
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
exports.BuddyUserService = BuddyUserService;
BuddyUserService.instance = null;
//# sourceMappingURL=buddyUserService.js.map