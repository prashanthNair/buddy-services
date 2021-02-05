import { Role } from "../models/role";

export interface IRoleService {
    postRole(roleData: Role);  
}