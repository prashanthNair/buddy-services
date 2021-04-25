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
exports.ProductService = void 0;
const db_config_1 = require("../configuration/db.config");
class ProductService {
    constructor() { }
    static getInstance() {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }
    postProduct(productData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let product = {
                    Name: productData.Name,
                    Category: productData.Category,
                    Type: productData.Type,
                    Brand: productData.Brand,
                    Currency: productData.Currency,
                    Description: productData.Description,
                    SellingPrice: productData.SellingPrice,
                    GST: productData.GST,
                    MRP: productData.MRP,
                    Created_date: productData.Created_date,
                    ActualPrice: productData.ActualPrice,
                    BusinessId: productData.BusinessId
                };
                let sql = `CALL PostProduct(?,?,?,?,?,?,?,?,?,?,?,?)`;
                let result = yield db_config_1.db.query(sql, [
                    product.Name,
                    product.Category,
                    product.Type,
                    product.Brand,
                    product.Currency,
                    product.Description,
                    product.SellingPrice,
                    product.GST,
                    product.MRP,
                    product.Created_date,
                    product.ActualPrice,
                    product.BusinessId
                ]);
                console.log(result);
                return result;
            }
            catch (error) {
                return error;
            }
        });
    }
    getProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Product ID" + productId);
                let sql = `CALL GetProducts(?)`;
                const [rows, fields] = yield db_config_1.db.query(sql, productId);
                return rows;
            }
            catch (error) {
                return null;
            }
        });
    }
    getProducts(businessId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Business ID is" + businessId);
                let sql = `CALL GetProductsByBusinessId(?)`;
                const [rows, fields] = yield db_config_1.db.query(sql, businessId);
                return rows;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.ProductService = ProductService;
ProductService.instance = null;
//# sourceMappingURL=productService.js.map