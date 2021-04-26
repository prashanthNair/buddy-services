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
    FirstName:any;
    LastName:any;
    Password:any;
    Email : String|undefined;
    MobileNum:number;
    Gender?:any|null;
    DOB?:any|null;
    BuddyRole?:any|null;
    ParentId?:any|null;;
}
//Updated
export class Update { 
    email : any;
    password:any;
}
