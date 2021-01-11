import { Product } from "../models/product";
import { IProductService } from "./IProductService";

class ProductService implements IProductService {
  private constructor() {}
  private static instance: IProductService = null;

  static getInstance() {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  postProduct(productInputModel: Product) {
    throw new Error("Method not implemented.");
  }
  
}
