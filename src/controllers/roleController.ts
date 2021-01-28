import { Request, Response, NextFunction } from "express";
import { IRoleService } from "../services/IRoleService";
import { RoleService } from "../services/roleService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";
import { Role } from "../models/role";

export class RoleController {
    private constructor() {}
  
    private static instance: RoleController = null;
    private roleService = null;
  
    /**
     * To get singleton instance
     *
     * @param  {object} roleService
     */
  
    public static getInstance(
      roleService: IRoleService = RoleService.getInstance()
    ) {
      if (!RoleController.instance) {
        RoleController.instance = new RoleController();
      }
      RoleController.instance.roleService = roleService; // mock service Object is passed as a param from .spec
      return RoleController.instance;
    }
/**
   * Insert into role table
   * TODO the functionality
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
  public async postRole(req: Request, res: Response, next: NextFunction) {
    try{
      let roleData: Role = {
          RoleId: req.body.roleId,
          UserId: req.body.userId,
          RoleName: req.body.roleName,
          Status: req.body.status
        };
      const result = await this.roleService.postRole(roleData);

      if (result) {
        HttpResponseMessage.successResponse(res, "Sucessfull");
      } else {
        HttpResponseMessage.sendErrorResponse(res, "Transaction Failed");
      }
    }catch (err) {
      HttpResponseMessage.sendErrorResponse(res, err);
    }
  }



}