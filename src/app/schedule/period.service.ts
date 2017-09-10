import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Period} from "./period.model";
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";

@Injectable()
export class PeriodService extends BaseService {

    entityName = 'period';
    urlEnd:string = 'periods';

    constructor(protected http: Http) {
        super();
    }

    getPeriods(date: string): Observable<Period[]> {
        return this.gets('date=' + date);
    }

    postPeriod(period:Period, date: string): Observable<Period> {
        period.date = date;

        return this.post(period);
    }

    putPeriod(period: Period): Observable<Period> {
        return this.put(period);
    }

    deletePeriod(period: Period): Observable<Period> {
        return this.httpDelete(period);
    }
}