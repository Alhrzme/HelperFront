import * as moment from 'moment';
import Moment = moment.Moment;

export class TimePeriod {
    begin: Moment;
    end: Moment;

    constructor(begin: Moment, end: Moment) {
        this.begin = begin;
        this.end = end;
    }
}