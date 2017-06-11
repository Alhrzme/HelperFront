import {Task} from "./task.model";

export class TaskEntry {
    id: number;
    isCompleted: boolean;
    date: string;
    deadLine: string;
    task: Task;
}