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
exports.HttpResponseMessage = void 0;
const logger_1 = require("./logger");
const httpResponse_1 = require("./httpResponse");
class HttpResponseMessage {
    /**
     * Sccuess Response
     *
     * @param  {string}   message
     * @param  {object}   res
     */
    static successResponse(res, message) {
        let resData = new httpResponse_1.HttpResponse();
        resData = { success: true, status: 200, message, data: [] };
        return res.status(200).json(resData);
    }
    ;
    /**
    * Sccuess Response with Data
    *
    * @param  {object}   res
    * @param  {string}   message
    * @param  {object}   data
    */
    static successResponseWithData(res, message, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let resData = new httpResponse_1.HttpResponse();
            resData = { success: true, status: 200, message, data };
            return res.status(200).json(resData);
        });
    }
    ;
    /**
    * Error Response
    *
    * @param  {object}   res
    * @param  {string}   message
    */
    static sendErrorResponse(res, result, error) {
        let resData = new httpResponse_1.HttpResponse();
        resData = {
            success: false, status: 500, message: result.message, error: {
                code: res.errno,
                message: result.message,
                stackTrace: error,
                params: error
            }, data: []
        };
        return res.status(500).json(resData);
    }
    ;
    /**
     * Not Found Erro Response
     *
     * @param  {object}   res
     * @param  {string}   message
     */
    static notFoundResponse(res, message) {
        let resData = new httpResponse_1.HttpResponse();
        resData = {
            success: false, status: 0, message, error: {
                code: 404,
                message: 404,
            }, data: {}
        };
        logger_1.default.error(message);
        return res.status(404).json({});
    }
    ;
    /**
     * Not Found Erro Response
     *
     * @param  {object}   res
     * @param  {string}   message
     */
    static validationErrorWithData(res, message, data) {
        let resData = new httpResponse_1.HttpResponse();
        resData = {
            success: false, status: 0, message, error: {
                code: 400,
                message: 'BAD_REQUEST',
            }, data
        };
        logger_1.default.error(resData.message);
        return res.status(400).json(resData);
    }
    ;
}
exports.HttpResponseMessage = HttpResponseMessage;
//# sourceMappingURL=httpResponseMessage.js.map