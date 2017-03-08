import {AbstractTask} from "./abstract-task.model";

export class RepetitiveTask extends AbstractTask {
    daysOfWeek: string[];
    beginDate: string;
    endDate: string;

    constructor(title?: string, daysOfWeek: string[] = []) {
        super();
        this.title = title;
        this.daysOfWeek = daysOfWeek;
    }

    public addDayOfWeek(dayOfWeek: string) {
        if (!this.daysOfWeek.includes(dayOfWeek)) {
            this.daysOfWeek.push(dayOfWeek);
        }
    }
}