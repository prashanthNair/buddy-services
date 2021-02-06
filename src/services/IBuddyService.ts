import { Buddy } from "../models/buddy";

export interface IBuddyService {
    postBuddy(buddyData: Buddy); 
    listTasks(): Promise<Object>; 
}