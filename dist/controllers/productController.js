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
exports.ProductController = void 0;
const productService_1 = require("../services/productService");
const httpResponseMessage_1 = require("../utils/httpResponseMessage");
class ProductController {
    constructor() {
        this.productService = null;
    }
    /**
     * To get singleton instance
     *
     * @param  {object} productService
     */
    static getInstance(productService = productService_1.ProductService.getInstance()) {
        if (!ProductController.instance) {
            ProductController.instance = new ProductController();
        }
        ProductController.instance.productService = productService; // mock service Object is passed as a param from .spec
        return ProductController.instance;
    }
    /**
       * Insert into product coloumn
       * TODO the functionality
       * @param  {object}   req
       * @param  {object}   res
       * @param  {function} next
       */
    postProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let productData = {
                    Name: req.body.name,
                    Category: req.body.category,
                    Type: req.body.type,
                    Brand: req.body.brand,
                    Currency: req.body.currency,
                    Description: req.body.description,
                    SellingPrice: req.body.sellingPrice,
                    GST: req.body.gst,
                    MRP: req.body.mrp,
                    Created_date: req.body.createdDate,
                    ActualPrice: req.body.actualPrice,
                    BusinessId: req.body.businessId
                };
                const result = yield this.productService.postProduct(productData);
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
    /**
       * db connect test api
       * my sql db instance created in aws lightsail
       * @param  {object}   req
       * @param  {object}   res
       * @param  {function} next
       */
    getProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.productService.getProduct(req.query.id);
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
    /**
     * db connect test api
     * my sql db instance created in aws lightsail
     * @param  {object}   req
     * @param  {object}   res
     * @param  {function} next
     */
    //To get products details by business id
    getProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.productService.getProducts(req.query.id);
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
}
exports.ProductController = ProductController;
ProductController.instance = null;
//# sourceMappingURL=productController.js.map