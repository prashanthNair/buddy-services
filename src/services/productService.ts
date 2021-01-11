import { Product } from "../models/product";
import { IProductService } from "./IProductService";
import { db } from "../configuration/db.config";

class ProductService implements IProductService {
  private constructor() {}
  private static instance: IProductService = null;

  static getInstance() {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  public async postProduct(productData: Product): Promise<Product> {
    let product: Product = {
      Name: productData.Name,
      Category: productData.Category,
      Type:productData.Type,
      Brand: productData.Brand,
      Currency: productData.Currency,
      Description: productData.Description,
      SellingPrice: productData.SellingPrice,
      GST: productData.GST,
      MRP:productData.MRP,
      Created_date: productData.Created_date,
      ActualPrice: productData.ActualPrice,
    };

    let sql = `CALL PostProduct(?,?,?,?,?,?,?,?,?,?,?)`;
    let result = await db.query(sql, [
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
      product.ActualPrice
    ]);
    console.log(result);
    return result;
  }
  
}
export { ProductService };