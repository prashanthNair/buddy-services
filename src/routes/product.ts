import { Request, Response, NextFunction } from "express";
import { ProductController } from "../controllers/productController";

const productRoutes = (app, productController: ProductController = ProductController.getInstance()) => {
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
        .post(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await productController.postProduct(req, res, next)
        )
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
        .get(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await productController.getProduct(req, res, next)
        )
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
        .get(async (req: Request,
            res: Response,
            next: NextFunction) =>
            await productController.getProducts(req, res, next)
        )
}
export default productRoutes;