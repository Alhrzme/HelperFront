import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {TimePeriod} from "../models/timePeriod";
import {Period} from "../../schedule/period.model";
import {unitOfTime} from "moment";
import Base = moment.unitOfTime.Base;

@Injectable()
export class TimeHelper {

    static DATE_FORMAT = 'DDMMYYYY';
    constructor() {

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
        return moment(time, "LT");
    }

    public static getDateDiff(firstDateString, secondDateString, dimension) {
        if (dimension) {
            dimension = 'days';
        }

        return TimeHelper.getDate(firstDateString).diff(TimeHelper.getDate(secondDateString), dimension);
    }

    public static getDate(dateString) {
        return moment(dateString, this.DATE_FORMAT);
    }

    public static getFormattedDateString(dateString) {
        return moment(dateString, "YYYY-MM-DD").format('DDMMYYYY');
    }

    public static sortPeriods(periods) {
        if (periods) {
            return periods.sort(function (p1, p2) {
                return moment(p1.begin, "LT").isAfter(moment(p2.begin, "LT")) ? 1 : -1;
            })
        } else {
            return [];
        }
    }

}
