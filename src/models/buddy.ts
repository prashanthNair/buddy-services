import { integer } from "aws-sdk/clients/cloudfront";

export class Buddy { 
    BuddyId:string;
    HomeTown:any;
    TeamId:any;
    UserId:any;
    IsActive:Boolean|false; 
    State:any;
    Country:any;
    MobileNum:any;
    ParentId:any;
    CreatedDate:any;  
    BuddyRole:any;
}

export class Task {
    ProductId:any;
    ProductName: string;
  Category: string;
  Type: string;
  BuddyMargin: any;
  Brand: string;
  Currency:string;  
  Description: string;
  SellingPrice: string;
  GST:any;
  MRP:any;
  ActualPrice: string ;/*Price Including Tax */
}