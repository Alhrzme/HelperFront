import {Period} from "./period.model";

export class Schedule {
    id:number;
    periods: Period[];
    description: string;
    beginTime : string;
    date : string;

    constructor(beginTime : string, date : string, description : string = '') {
        this.date = date;
        this.beginTime = beginTime;
        this.description = description;
    }
}