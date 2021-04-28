import { NextFunction, Response, Request } from "express";
import { ITeamService } from "../services/ITeamService";
import { TeamService } from "../services/teamService";
import { HttpResponseMessage } from "../utils/httpResponseMessage";

export class TeamController {
    private constructor() { }

    private static instance: TeamController = null;
    private teamService = null;

    /**
     * To get singleton instance
     *
     * @param  {object} earningService
     */

    public static getInstance(
        teamService: ITeamService = TeamService.getInstance()
    ) {
        if (!TeamController.instance) {
            TeamController.instance = new TeamController();
        }
        TeamController.instance.teamService = teamService; // mock service Object is passed as a param from .spec
        return TeamController.instance;
    }

    /**
   * Get tasks for buddy
   * 
   * @param  {object}   req
   * @param  {object}   res
   * @param  {function} next
   */
    public async listAllTeamMembers(req: Request, res: Response, next: NextFunction) {

        try {
            let buddyId =Number.parseInt(req.params.buddyId)
            const result = await this.teamService.listAllTeamMembers(buddyId);
            HttpResponseMessage.successResponseWithData(res, "Sucessfull", result);
        }
        catch (error) {
            HttpResponseMessage.sendErrorResponse(res, "Transaction Failed", error);
        }
    }
}