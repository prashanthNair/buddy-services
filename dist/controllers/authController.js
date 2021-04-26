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
exports.AuthController = void 0;
const authService_1 = require("../services/authService");
const httpResponseMessage_1 = require("../utils/httpResponseMessage");
class SuccessResponse {
}
class AuthController {
    constructor() {
        this.authService = null;
    }
    /**
     * To get singleton instance
     *
     * @param  {object} authService
     */
    static getInstance(authService = authService_1.AuthService.getInstance()) {
        if (!AuthController.instance) {
            AuthController.instance = new AuthController();
        }
        AuthController.instance.authService = authService; // mock service Object is passed as a param from .spec
        return AuthController.instance;
    }
    /**
     * Basic AuthenticationS
     *
     * @param  {object}   req
     * @param  {object}   res
     * @param  {function} next
     */
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate the user credential
                if (req.params &&
                    (req.params.email.length == 0 || req.params.password.length == 0)) {
                    return httpResponseMessage_1.HttpResponseMessage.validationErrorWithData(res, "Login Failed", req);
                }
                const result = yield this.authService.login(req.params.email, req.params.password);
                if (result) {
                    httpResponseMessage_1.HttpResponseMessage.successResponseWithData(res, "Login Sucessfull", result);
                }
                else {
                    httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, "Login Failed");
                }
            }
            catch (err) {
                httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, err);
            }
        });
    }
    postUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userData = {
                    FirstName: req.body.firstName,
                    LastName: req.body.lastName,
                    Password: req.body.password,
                    Email: req.body.email,
                    MobileNum: Number.parseInt(req.params.mobileNum),
                    Gender: req.body.Gender,
                    DOB: req.body.DOB,
                    BuddyRole: req.body.BuddyRole,
                    ParentId: req.body.ParentId
                };
                const result = yield this.authService.postUser(userData, req.params.mobileNum);
                if (result.errno) {
                    httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, result);
                }
                else {
                    httpResponseMessage_1.HttpResponseMessage.successResponse(res, "Sucessfull");
                }
            }
            catch (err) {
                httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, err);
            }
        });
    }
    /**
     * db connect test api
     * my sql db instance created in aws lightsail
     * @param  {object}   req
     * @param  {object}   res
     * @param  {function} next
     */
    getdetails(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.authService.getUsers(req.query.id); // :TODO remove hardcode
                if (result) {
                    httpResponseMessage_1.HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
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
    getUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate the Mobile Number
                if (req.params.mobileNum.length == 13) {
                    return httpResponseMessage_1.HttpResponseMessage.validationErrorWithData(res, "Invalid Mobile Number", req);
                }
                const result = yield this.authService.getUser(Number.parseInt(req.params.mobileNum));
                if (result) {
                    httpResponseMessage_1.HttpResponseMessage.successResponseWithData(res, "User is valid", result);
                }
                else {
                    httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, "Invalid User");
                }
            }
            catch (err) {
                httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, err);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // validate the user credential
                if (req.body &&
                    (req.body.email.length == 0 || req.body.password.length == 0)) {
                    return httpResponseMessage_1.HttpResponseMessage.validationErrorWithData(res, "Invalid inputs", req);
                }
                let userData = {
                    email: req.body.Email,
                    password: req.body.Password,
                };
                const result = yield this.authService.update(userData);
                if (result) {
                    httpResponseMessage_1.HttpResponseMessage.successResponse(res, "Sucessfully updated");
                }
                else {
                    httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
                }
            }
            catch (error) {
                httpResponseMessage_1.HttpResponseMessage.sendErrorResponse(res, "Transaction 'Failed", error);
            }
        });
    }
}
exports.AuthController = AuthController;
AuthController.instance = null;
//Updated 
//# sourceMappingURL=authController.js.map