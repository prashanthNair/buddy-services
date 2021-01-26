import { Role } from "../models/role";
import { IRoleService } from "./IRoleService";
import { db } from "../configuration/db.config";

class RoleService implements IRoleService {
    private constructor() {}
    private static instance: IRoleService = null;
  
    static getInstance() {
      if (!RoleService.instance) {
        RoleService.instance = new RoleService();
      }
      return RoleService.instance;
    }
    public async postRole(roleData: Role): Promise<Role> {
        try {
          let role: Role = {
            RoleId: roleData.RoleId,
            UserId: roleData.UserId,
            RoleName:roleData.RoleName,
            Status: roleData.Status
          };
      
          let sql = `CALL PostRole(?,?,?,?)`;
          let result = await db.query(sql, [
            role.RoleId,
            role.UserId,
            role.RoleName,
            role.Status
          ]);
          console.log(result);
          return result;
          
        } catch (error) {
          return error
          
        }
      }



}
export { RoleService };