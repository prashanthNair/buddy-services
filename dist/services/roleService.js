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
exports.RoleService = void 0;
const db_config_1 = require("../configuration/db.config");
class RoleService {
    constructor() { }
    static getInstance() {
        if (!RoleService.instance) {
            RoleService.instance = new RoleService();
        }
        return RoleService.instance;
    }
    postRole(roleData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let role = {
                    RoleId: roleData.RoleId,
                    UserId: roleData.UserId,
                    RoleName: roleData.RoleName,
                    Status: roleData.Status
                };
                let sql = `CALL PostRole(?,?,?,?)`;
                let result = yield db_config_1.db.query(sql, [
                    role.RoleId,
                    role.UserId,
                    role.RoleName,
                    role.Status
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
exports.RoleService = RoleService;
RoleService.instance = null;
//# sourceMappingURL=roleService.js.map