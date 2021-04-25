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
exports.AuthService = void 0;
const db_config_1 = require("../configuration/db.config");
class AuthService {
    constructor() { }
    getUserById(id) {
        throw new Error("Method not implemented.");
    }
    static getInstance() {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }
    getUsers(userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sql = `CALL GetUsers(?)`;
                const [rows, fields] = yield db_config_1.db.query(sql, userId);
                return rows;
            }
            catch (error) {
                return null;
            }
        });
    }
    getUser(mobileNum) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sql = `CALL GetUser(?)`;
                const [rows, fields] = yield db_config_1.db.query(sql, mobileNum);
                return rows;
            }
            catch (error) {
                console.log(error);
                return error;
            }
        });
    }
    postUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = {
                    UserId: userData.UserId,
                    FirstName: userData.FirstName,
                    LastName: userData.LastName,
                    Password: userData.Password,
                    Email: userData.Email,
                    MobileNum: userData.MobileNum,
                };
                let sql = `CALL PostUser(?,?,?,?,?,?)`;
                let result = yield db_config_1.db.query(sql, [
                    user.UserId,
                    user.FirstName,
                    user.LastName,
                    user.Password,
                    user.Email,
                    user.MobileNum,
                ]);
                console.log(result);
                return result;
            }
            catch (err) {
                return err;
            }
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [rows, fields] = yield db_config_1.db.query("SELECT email from user where email = ? ", email);
                return rows;
            }
            catch (error) {
                return null;
            }
        });
    }
    update(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = {
                    email: userData.email,
                    password: userData.password,
                };
                let result = yield db_config_1.db.query(`UPDATE user SET password = ? WHERE email = ? `, user);
                console.log(result);
                return result;
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.AuthService = AuthService;
AuthService.instance = null;
//# sourceMappingURL=authService.js.map