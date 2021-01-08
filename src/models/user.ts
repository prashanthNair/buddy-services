export class User { 
    Email : String|undefined;
    Password:any;
    MobileNum:any;
    Location:String|"";
    Created_date?:Date|undefined  
    IsActive:Boolean|false; 
    Name:any
}

export class Update { 
    email : any;
    password:any;
}
