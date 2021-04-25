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
exports.UserReferenceController = void 0;
const userReferenceService_1 = require("../services/userReferenceService");
const httpResponseMessage_1 = require("../utils/httpResponseMessage");
class UserReferenceController {
    constructor() {
        this.userReferenceService = null;
    }
    /**
     * To get singleton instance
     *
     * @param  {object} userReferenceService
     */
    static getInstance(userReferenceService = userReferenceService_1.UserReferenceService.getInstance()) {
        if (!UserReferenceController.instance) {
            UserReferenceController.instance = new UserReferenceController();
        }
        UserReferenceController.instance.userReferenceService = userReferenceService; // mock service Object is passed as a param from .spec
        return UserReferenceController.instance;
    }
    /**
     * Insert into user Reference table
     * TODO the functionality
     * @param  {object}   req
     * @param  {object}   res
     * @param  {function} next
     */
    postUserReference(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userData = {
                    MobileNum: req.body.mobileNum,
                };
                const result = yield this.userReferenceService.postUserReference(userData);
                if (result.errno) {
                    console.log("First if loop");
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
}
exports.UserReferenceController = UserReferenceController;
UserReferenceController.instance = null;
//# sourceMappingURL=userReferenceController.js.map