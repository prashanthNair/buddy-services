export class User { 
    UserName:any;
    FirstName:any;
    LastName:any;
    Password:any;
    Location:String|"";
    IsActive:Boolean|false; 
    IsDeleted:Boolean|false;
    ProfilePic:String;
    State:any;
    Country:any;
    Email : String|undefined;
    MobileNum:any;
    Created_date?:Date|undefined  
}

export class Update { 
    email : any;
    password:any;
}
