import {Request, Response, NextFunction} from "express";
import { ProductController } from "../controllers/productController";

const productRoutes = (app, productController: ProductController = ProductController.getInstance()) => {

    app.route('/api/v1/product/register')
    .post(async (req: Request,
        res: Response,
        next: NextFunction) =>
        await productController.postProduct(req, res,next)
    ) 
    app.route('/api/v1/product/detail')
    .get(async (req: Request,
        res: Response,
        next: NextFunction) =>
        await productController.getProduct(req, res,next)
    )


}
export default productRoutes;