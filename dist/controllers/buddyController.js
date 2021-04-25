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
exports.BuddyController = void 0;
const buddyService_1 = require("../services/buddyService");
const httpResponseMessage_1 = require("../utils/httpResponseMessage");
class SuccessResponse {
}
class BuddyController {
    constructor() {
        this.buddyService = null;
    }
    /**
     * To get singleton instance
     *
     * @param  {object} buddyService
     */
    static getInstance(buddyService = buddyService_1.BuddyService.getInstance()) {
        if (!BuddyController.instance) {
            BuddyController.instance = new BuddyController();
        }
        BuddyController.instance.buddyService = buddyService; // mock service Object is passed as a param from .spec
        return BuddyController.instance;
    }
    /**
       * Insert into buddy coloumn
       * TODO the functionality
       * @param  {object}   req
       * @param  {object}   res
       * @param  {function} next
       */
    postBuddy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let buddyData = {
                    ParentId: req.params.parentId,
                    MobileNum: req.params.mobileNum,
                    BuddyRole: req.params.buddyRole,
                };
                console.log;
                const result = yield this.buddyService.postBuddy(buddyData);
                if (result.errno) {
                    console.log("Success");
                    httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, result);
                }
                else {
                    console.log("Else part");
                    httpResponseMessage_1.HttpResponseMessage.successResponse(res, "Sucessfull");
                }
            }
            catch (err) {
                console.log("Catch");
                httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, err);
            }
        });
    }
    /**
     * Get tasks for buddy
     *
     * @param  {object}   req
     * @param  {object}   res
     * @param  {function} next
     */
    listTasks(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.buddyService.listTasks();
                httpResponseMessage_1.HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
            }
            catch (error) {
                httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, "Transaction Failed", error);
            }
        });
    }
}
exports.BuddyController = BuddyController;
BuddyController.instance = null;
//# sourceMappingURL=buddyController.js.map