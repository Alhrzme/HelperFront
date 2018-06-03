import {Injectable} from '@angular/core';

import {Period} from "./period.model";
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PeriodService extends BaseService {

    entityName = 'period';
    urlEnd:string = 'periods';

    constructor(protected http: HttpClient) {
        super();
    }

    getPeriods(date: string) {
        return this.gets('date=' + date);
    }

    postPeriod(period:Period, date: string) {
        period.date = date;

        return this.post(period);
    }

    putPeriod(period: Period) {
        return this.put(period);
    }

    deletePeriod(period: Period) {
        return this.httpDelete(period);
    }
}