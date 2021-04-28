import { Task } from "../models/buddy";

export interface ITaskService {
    listTasks(): Promise<Task>
}