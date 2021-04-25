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
const app_1 = require("./app");
const http = require("http");
const PORT = 3000;
var host = (app) => {
    app.route("/")
        .get((req, res, next) => {
        console.log("Your host name is " + req.hostname);
    });
};
http.createServer(app_1.default).listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    var hostName = yield host(app_1.default);
    console.log('Express server listening on host ' + hostName);
    console.log('Express server listening on port ' + PORT);
}));
//# sourceMappingURL=server.js.map