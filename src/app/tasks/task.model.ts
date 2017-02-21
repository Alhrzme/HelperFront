export class Task {
    id: number;
    title: string;
    children: Task[];
    parent: Task;
    isCompleted: boolean;

    constructor(title: string = null) {
        this.title = title;
    }
}