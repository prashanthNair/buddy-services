"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundErrorHandler = void 0;
/**
 * 404 middleware to catch error response
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 */
function notFoundErrorHandler(req, res, next) {
    res.status(404)
        .json({
        success: false,
        error: {
            code: 404,
            message: 'NOT_FOUND',
        },
    });
}
exports.notFoundErrorHandler = notFoundErrorHandler;
/**
 * Generic error response middleware
 *
 * @param  {object}   err
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 */
function errorHandler(err, req, res, next) {
    res.status(err.status || 500)
        .json({
        success: false,
        error: {
            code: err.code || 500,
            message: err.message || 'INTERNAL_SERVER_ERROR',
        },
    });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=apiErrorHandler.js.map