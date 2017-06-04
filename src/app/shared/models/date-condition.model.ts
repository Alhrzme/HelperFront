import {Moment} from "moment";
import {TimeHelper} from "../services/time-helper.service";

export class DateCondition {
    daysOfWeek: string[];
    beginDate: string;
    endDate: string;
    weekFrequency: number;
    newTasksCreate: boolean = false;
    daysBeforeDeadline: string;
    dates: string[];

    public addDate(momentDate: Moment) {
        this.dates.push(momentDate.format(TimeHelper.DATE_FORMAT));

        return this;
    }
}