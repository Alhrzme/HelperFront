import {AbstractTask} from "./abstract-task.model";

export class Task extends AbstractTask {
    children: Task[];
    parent: Task;
    isCompleted: boolean;
    date: string;
    deadline: string;

    constructor(title: string = null) {
        super();
        this.title = title;
    }
}