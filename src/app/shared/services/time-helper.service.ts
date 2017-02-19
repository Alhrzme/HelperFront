import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {TimePeriod} from "../models/timePeriod";
import {Period} from "../../schedule/period.model";

@Injectable()
export class TimeHelperService {

  constructor() {
    
  }

    public static getEmptyPeriods(periods:Period[], beginString:string, endString:string) {
        let emptyPeriods: TimePeriod[] = [];
        let estimatedBegin = TimeHelperService.getMomentTime(beginString);
        let estimatedEnd = TimeHelperService.getMomentTime(endString);
        if (periods.length == 0) {
            emptyPeriods.push(new TimePeriod(estimatedBegin, estimatedEnd));
        } else {
            let firstPeriodBegin = TimeHelperService.getMomentTime(periods[0].begin);
            if (estimatedBegin.isBefore(firstPeriodBegin)) {
                emptyPeriods.push(new TimePeriod(estimatedBegin,
                    TimeHelperService.getMomentTime(periods[0].begin)));
            }
            let newEnd;
            periods.forEach(function (period: Period) {
                let periodBegin = TimeHelperService.getMomentTime(period.begin);
                if (newEnd && periodBegin.isAfter(newEnd)) {
                    let newEmptyPeriod = new TimePeriod(newEnd, periodBegin);
                    emptyPeriods.push(newEmptyPeriod);
                }
                newEnd = TimeHelperService.getMomentTime(period.end);
            });
            if (newEnd.isBefore(estimatedEnd)) {
                emptyPeriods.push(new TimePeriod(newEnd, estimatedEnd));
            }
        }

        return emptyPeriods;
    }

    private static getMomentTime(time: string) {
        return moment(time, "LT");
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
