export class User {
    UserId:String; 
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
export class InitialUser { 
    UserId:String; 
    FirstName:any;
    LastName:any;
    Password:any;
    Email : String|undefined;
    MobileNum:any;
}

export class Update { 
    email : any;
    password:any;
}
