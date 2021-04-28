

export interface ITeamService {
    listAllTeamMembers(buddyId:Number): Promise<Object>
}