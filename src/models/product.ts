export class Product {
  Name: string;
  Brand: string;
  Category: string;
  Type: string;
  ActualPrice: Number;/*Price Including Tax */
  SellingPrice: string;
  Description: String;
  GST:Number;
  MRP:Number;
  Currency:String;  
  Created_date?: Date | undefined;
}
