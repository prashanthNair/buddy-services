import { Integer } from "aws-sdk/clients/apigateway";
import { Product } from "../models/product";

export interface IProductService {
  postProduct(productData: Product);
  getProduct(productId: Integer): Promise<Product>;
  getProducts(businessId: Integer): Promise<Product>;
  
}
 
