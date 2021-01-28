import { User } from "../models/userReference";

export interface IUserReferenceService {
    postUserReference(userData: User);  
}