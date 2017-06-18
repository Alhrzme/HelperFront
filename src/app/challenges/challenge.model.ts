import {Task} from "../tasks/taskData/shared/models/task.model";

export class Challenge {
    id: number;
    begin: string;
    end: string;
    tasks: Task[];
    award: string;
}