import {  Task } from "../models/buddy";

export interface IBuddyService { 
    listTasks(): Promise<Task>; 
}