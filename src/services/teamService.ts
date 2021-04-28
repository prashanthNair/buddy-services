import { db } from "../configuration/db.config";
import { Task } from "../models/buddy"; 
import {ITeamService} from '../services/ITeamService'

export class TeamService implements ITeamService {

    private constructor() { }

    private static instance: ITeamService = null;

    static getInstance() {
        if (!TeamService.instance) {
            TeamService.instance = new TeamService();
        }
        return TeamService.instance;
    }

    public async listAllTeamMembers(buddyId:Number): Promise<Object> {
        let sql = `CALL GetTeamMembersDetails(?)`;
        const [rows, fields] = await db.query(sql, buddyId);
        const [tasks] = rows;
        return <Object>tasks;
    }
}