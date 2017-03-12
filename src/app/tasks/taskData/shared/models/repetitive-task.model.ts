import {AbstractTask} from "./abstract-task.model";

export class RepetitiveTask extends AbstractTask {
    daysOfWeek: string[];
    beginDate: string;
    endDate: string;
    weekFrequency:number;
    static weekendDays = ['sat', 'sun'];
    static weekDays = ['mon', 'tue', 'wed', 'thu', 'fri'];

    constructor(beginDate?: string, endDate?: string, title?: string, daysOfWeek: string[] = []) {
        super();
        this.title = title;
        this.daysOfWeek = daysOfWeek;
        this.beginDate = beginDate;
        this.endDate = endDate;
    }

    public addDayOfWeek(dayOfWeek: string) {
        let days = [];
        if (dayOfWeek == 'every' || 'weekend' || 'weekdays') {
            if (dayOfWeek == 'every') {
                days = [].concat(RepetitiveTask.weekendDays).concat(RepetitiveTask.weekDays);
            } else if (dayOfWeek == 'weekend') {
                days = [].concat(RepetitiveTask.weekendDays);
            } else if (dayOfWeek == 'weekdays') {
                days = [].concat(RepetitiveTask.weekDays);
            } else {
                days = [dayOfWeek];
            }
        }

        for (let day of days) {
            if (!this.daysOfWeek.includes(day)) {
                this.daysOfWeek.push(day);
            }
        }
    }

    public removeDayOfWeek(dayOfWeek) {
        let dayOfWeekIndex = this.daysOfWeek.indexOf(dayOfWeek);
        if (dayOfWeekIndex > -1) {
            this.daysOfWeek.splice(dayOfWeekIndex, 1);
        }
    }

}