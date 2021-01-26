import { BuddyUser } from "../models/buddyUser";

export interface IBuddyUserService {
    postBuddyUser(buddyUserData: BuddyUser);  
}