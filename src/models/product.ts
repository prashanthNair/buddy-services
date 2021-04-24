export class Product {
  [x: string]: string;
  Name: string;
  Category: string;
  Type: string;
  Brand: string;
  Currency:string;  
  Description: string;
  SellingPrice: string;
  GST:any;
  MRP:any;
  Created_date?: any | undefined;
  ActualPrice: string ;/*Price Including Tax */
  BusinessId:string;
}
