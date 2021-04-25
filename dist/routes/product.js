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
const productController_1 = require("../controllers/productController");
const productRoutes = (app, productController = productController_1.ProductController.getInstance()) => {
    /**
     * @swagger
     * /api/v1/product/register:
     *   post:
     *     summary: Register Product into Product table.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Product'
     *     responses:
     *       201:
     *         description: Product added successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/SuccessResponse'
     *       500:
     *         $ref: '#/components/responses/FailureError'
     *
    */
    app.route('/api/v1/product/register')
        .post((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield productController.postProduct(req, res, next); }));
    /**
     * @swagger
     * /api/v1/product/detailbyid:
     *   get:
     *     summary: Shows details of product table by product ID.
     *     parameters:
     *       - in: query
     *         name: id
     *         required: true
     *         description: Product ID of the product
     *         schema:
     *           type: string
     *
     *     responses:
     *       201:
     *         $ref: '#/components/responses/Success'
     *       500:
     *         $ref: '#/components/responses/FailureError'
     *       400:
     *         $ref: '#/components/responses/BadRequest'
     *
     *
    */
    app.route('/api/v1/product/detailbyid/')
        .get((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield productController.getProduct(req, res, next); }));
    /**
     * @swagger
     * /api/v1/product/detail:
     *   get:
     *     summary: Shows details of product table by business Id .
     *     parameters:
     *       - in: query
     *         name: id
     *         required: true
     *         description: Business ID of the product
     *         schema:
     *           type: string
     *
     *     responses:
     *       201:
     *         $ref: '#/components/responses/Success'
     *       500:
     *         $ref: '#/components/responses/FailureError'
     *       400:
     *         $ref: '#/components/responses/BadRequest'
     *
     *
    */
    app.route('/api/v1/product/detail/')
        .get((req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield productController.getProducts(req, res, next); }));
};
exports.default = productRoutes;
//# sourceMappingURL=product.js.map