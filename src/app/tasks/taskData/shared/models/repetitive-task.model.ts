import {AbstractTask} from "./abstract-task.model";
import {DaysOfWeek} from "../../../../shared/common/DaysOfWeek";

export class RepetitiveTask extends AbstractTask {
    daysOfWeek: string[];
    beginDate: string;
    endDate: string;
    weekFrequency: number;
    newTasksCreate: boolean = false;
    daysBeforeDeadline: string;

    constructor(beginDate?: string, endDate?: string, title?: string, daysOfWeek: string[] = []) {
        super();
        this.title = title;
        this.daysOfWeek = daysOfWeek;
        this.beginDate = beginDate;
        this.endDate = endDate;
    }

    public addDayOfWeek(dayOfWeek: string) {
        let days = [];
        if (dayOfWeek == 'every') {
            days = DaysOfWeek.getDaysOfWeekValues();
        } else if (dayOfWeek == 'weekend') {
            days = DaysOfWeek.getWeekendDays();
        } else if (dayOfWeek == 'weekdays') {
            days = DaysOfWeek.getWeekDays();
        } else {
            days = [dayOfWeek];
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