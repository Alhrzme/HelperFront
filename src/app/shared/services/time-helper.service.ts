import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {TimePeriod} from "../models/timePeriod";
import {Period} from "../../schedule/period.model";

@Injectable()
export class TimeHelper {

    static DATE_FORMAT = 'DDMMYYYY';
    static INPUT_DATE_FORMAT = "YYYY-MM-DD";
    static TIME_FORMAT = 'HH:mm';

    constructor() {

    }

    public static getCurrentDateString() {
        return moment().format(this.DATE_FORMAT);
    }

    /**
     * @returns {moment.Moment}
     */
    public static getCurrentTime() {
        return moment();
    }

    public static getEmptyPeriods(periods: Period[], beginString: string, endString: string) {
        let emptyPeriods: TimePeriod[] = [];
        let estimatedBegin = TimeHelper.getMomentTime(beginString);
        let estimatedEnd = TimeHelper.getMomentTime(endString);
        if (!periods || periods.length == 0) {
            emptyPeriods.push(new TimePeriod(estimatedBegin, estimatedEnd));
        } else {
            // let firstPeriodBegin = TimeHelper.getMomentTime(periods[0].begin);
            // if (estimatedBegin.isBefore(firstPeriodBegin)) {
            //     emptyPeriods.push(new TimePeriod(estimatedBegin,
            //         TimeHelper.getMomentTime(periods[0].begin)));
            // }
            let newEnd;
            periods.forEach(function (period: Period) {
                let periodBegin = TimeHelper.getMomentTime(period.begin);
                if (newEnd && periodBegin.isAfter(newEnd)) {
                    let newEmptyPeriod = new TimePeriod(newEnd, periodBegin);
                    emptyPeriods.push(newEmptyPeriod);
                }
                newEnd = TimeHelper.getMomentTime(period.end);
            });
            if (newEnd.isBefore(estimatedEnd)) {
                emptyPeriods.push(new TimePeriod(newEnd, estimatedEnd));
            }
        }

        return emptyPeriods;
    }

    public static getMomentTime(time: string) {
        return moment(time, this.TIME_FORMAT);
    }

    public static getDateDiff(firstDateString, secondDateString, dimension) {
        if (!dimension) {
            dimension = 'days';
        }

        return TimeHelper.getDate(firstDateString).diff(TimeHelper.getDate(secondDateString), dimension);
    }

    /**
     * @param dateString
     * @param dateFormat
     * @returns {moment.Moment}
     */
    public static getDate(dateString, dateFormat = this.DATE_FORMAT) {
        return moment(dateString, dateFormat);
    }

    public static getFormattedDateString(dateString, fromFormat: string = this.INPUT_DATE_FORMAT, inFormat:string = this.DATE_FORMAT) {
        return moment(dateString, fromFormat).format(inFormat);
    }

    public static sortPeriods(periods) {
        if (periods) {
            return periods.sort(function (p1, p2) {
                let firstPeriodBegin = TimeHelper.getMomentTime(p1.begin);
                let secondPeriodBegin = TimeHelper.getMomentTime(p2.begin);
                return firstPeriodBegin.isAfter(secondPeriodBegin) ? 1 : -1;
            })
        } else {
            return [];
        }
    }

    public static addTimeToStringValue(value, quantity, dimension, format = TimeHelper.TIME_FORMAT) {
        return TimeHelper.getMomentTime(value)
            .add(quantity, dimension)
            .format(format);
    }
}
