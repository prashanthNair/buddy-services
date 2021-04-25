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
exports.BuddyService = void 0;
const db_config_1 = require("../configuration/db.config");
class BuddyService {
    constructor() { }
    static getInstance() {
        if (!BuddyService.instance) {
            BuddyService.instance = new BuddyService();
        }
        return BuddyService.instance;
    }
    postBuddy(buddyData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let buddy = {
                    ParentId: buddyData.ParentId,
                    MobileNum: buddyData.MobileNum,
                    BuddyRole: buddyData.BuddyRole,
                };
                let sql = `CALL PostBuddy(?,?,?)`;
                let result = yield db_config_1.db.query(sql, [
                    buddy.ParentId,
                    buddy.MobileNum,
                    buddy.BuddyRole,
                ]);
                console.log(result);
                return result;
            }
            catch (error) {
                return error;
            }
        });
    }
    listTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = `CALL GetBuddyInventoryProducts()`;
            const [rows, fields] = yield db_config_1.db.query(sql);
            const [tasks] = rows;
            return tasks;
        });
    }
}
exports.BuddyService = BuddyService;
BuddyService.instance = null;
//# sourceMappingURL=buddyService.js.map