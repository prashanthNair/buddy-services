import { Product } from "../models/product";

export interface IProductService {
  postProduct(productData: Product);
  
}
 
