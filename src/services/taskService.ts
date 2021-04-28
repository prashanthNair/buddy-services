import { db } from "../configuration/db.config";
import { Task } from "../models/buddy";
import { ITaskService } from "./ITaskService";

export class TaskService {

    private constructor() { }

    private static instance: ITaskService = null;

    static getInstance() {
        if (!TaskService.instance) {
            TaskService.instance = new TaskService();
        }
        return TaskService.instance;
    }

    public async listTasks(): Promise<Task> {
        let sql = `CALL GetBuddyInventoryProducts()`;
        const [rows, fields] = await db.query(sql);
        const [tasks] = rows;
        return <Task>tasks;
    }
}