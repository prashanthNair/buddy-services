import {Request, Response, NextFunction} from "express";
import { ProductController } from "../controllers/productController";

const productRoutes = (app, productController: ProductController = ProductController.getInstance()) => {

    app.route('/api/v1/product/register')
    .post(async (req: Request,
        res: Response,
        next: NextFunction) =>
        await productController.postProduct(req, res,next)
    ) 
    app.route('/api/v1/product/detailbyid')
    .get(async (req: Request,
        res: Response,
        next: NextFunction) =>
        await productController.getProduct(req, res,next)
    )
    // app.route('/api/v1/product/detail') Comment due to build error
    // .get(async (req: Request,
    //     res: Response,
    //     next: NextFunction) =>
    //     await productController.getProducts(req, res,next)
    // )


}
export default productRoutes;