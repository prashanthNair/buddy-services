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
exports.BuddyUserController = void 0;
const buddyUserService_1 = require("../services/buddyUserService");
const httpResponseMessage_1 = require("../utils/httpResponseMessage");
class BuddyUserController {
    constructor() {
        this.buddyUserService = null;
    }
    /**
     * To get singleton instance
     *
     * @param  {object} roleService
     */
    static getInstance(buddyUserService = buddyUserService_1.BuddyUserService.getInstance()) {
        if (!BuddyUserController.instance) {
            BuddyUserController.instance = new BuddyUserController();
        }
        BuddyUserController.instance.buddyUserService = buddyUserService; // mock service Object is passed as a param from .spec
        return BuddyUserController.instance;
    }
    /**
       * Insert into Buddy table, User table and Role table
       * TODO the functionality
       * @param  {object}   req
       * @param  {object}   res
       * @param  {function} next
       */
    postBuddyUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let buddyUserData = {
                    HomeTown: req.body.homeTown,
                    TeamId: req.body.teamId,
                    UserId: req.body.userId,
                    IsActive: req.body.isActive,
                    State: req.body.state,
                    Country: req.body.country,
                    MobileNum: req.body.mobileNum,
                    ParentId: req.body.parentId,
                    CreatedDate: req.body.createdDate,
                    BuddyRole: req.body.buddyRole,
                    UserName: req.body.userName,
                    FirstName: req.body.firstName,
                    LastName: req.body.lastName,
                    Password: req.body.password,
                    Location: req.body.location,
                    Email: req.body.email,
                    RoleId: req.body.roleId,
                    RoleName: req.body.roleName,
                    Status: req.body.status
                };
                const result = yield this.buddyUserService.postBuddyUser(buddyUserData);
                if (result) {
                    httpResponseMessage_1.HttpResponseMessage.successResponse(res, "Sucessfull");
                }
                else {
                    httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
                }
            }
            catch (err) {
                httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, err);
            }
        });
    }
}
exports.BuddyUserController = BuddyUserController;
BuddyUserController.instance = null;
//# sourceMappingURL=buddyUserController.js.map