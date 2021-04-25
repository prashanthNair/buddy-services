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
exports.RoleController = void 0;
const roleService_1 = require("../services/roleService");
const httpResponseMessage_1 = require("../utils/httpResponseMessage");
class RoleController {
    constructor() {
        this.roleService = null;
    }
    /**
     * To get singleton instance
     *
     * @param  {object} roleService
     */
    static getInstance(roleService = roleService_1.RoleService.getInstance()) {
        if (!RoleController.instance) {
            RoleController.instance = new RoleController();
        }
        RoleController.instance.roleService = roleService; // mock service Object is passed as a param from .spec
        return RoleController.instance;
    }
    /**
       * Insert into role table
       * TODO the functionality
       * @param  {object}   req
       * @param  {object}   res
       * @param  {function} next
       */
    postRole(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let roleData = {
                    RoleId: req.body.roleId,
                    UserId: req.body.userId,
                    RoleName: req.body.roleName,
                    Status: req.body.status
                };
                const result = yield this.roleService.postRole(roleData);
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
exports.RoleController = RoleController;
RoleController.instance = null;
//# sourceMappingURL=roleController.js.map