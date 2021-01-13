import { Request, Response, NextFunction } from "express";
import { IProductService } from "../services/IProductService";
import { ProductService } from "../services/productService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { Product } from "../models/product";
import { stringify } from "querystring";


export class ProductController {
    private constructor() {}
  
    private static instance: ProductController = null;
    private productService = null;
  
    /**
     * To get singleton instance
     *
     * @param  {object} productService
     */
  
    public static getInstance(
      productService: IProductService = ProductService.getInstance()
    ) {
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
  public async postProduct(req: Request, res: Response, next: NextFunction) {
    
      let productData: Product = {
          Name: req.body.productName,
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
        
      };
      const result = await this.productService.postProduct(productData);

      if (result) {
        HttpResponseMessage.successResponse(res, "Sucessfull");
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
      }
  }

/**
   * db connect test api
   * my sql db instance created in aws lightsail
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
  public async getProduct(req: Request, res: Response, next: NextFunction) {
    
    try {
      // console.log(JSON.stringify(req.body));
      
      const result = await this.productService.getProduct(req.body.id);
      if (result) {
        HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
      }
    } catch (err) {
      HttpResponseMessage.sendErrorResponse(res, err);
    }
  }

}