import { User } from "../models/user";

export interface IAuthService {
    login(email: String, password: String): Promise<User>;
    postUser(userData: User); 
}