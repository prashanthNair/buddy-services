import { Product } from "../models/product";

export interface IProductService {
  postProduct(productInputModel: Product);
}
 
