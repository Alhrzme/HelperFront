import {AbstractTask} from "./abstract-task.model";

export class RepetitiveTask extends AbstractTask {
    daysOfWeek: string[];
    beginDate: string;
    endDate: string;

    constructor(beginDate?: string, endDate?: string, title?: string, daysOfWeek: string[] = []) {
        super();
        this.title = title;
        this.daysOfWeek = daysOfWeek;
        this.beginDate = beginDate;
        this.endDate = endDate;
    }

    public addDayOfWeek(dayOfWeek: string) {
        if (!this.daysOfWeek.includes(dayOfWeek)) {
            this.daysOfWeek.push(dayOfWeek);
        }
    }
}