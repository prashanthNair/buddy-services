import { Buddy } from "../models/buddy";

export interface IBuddyService {
    postBuddy(buddyData: Buddy); 
    listTask(): Promise<Object>; 
}