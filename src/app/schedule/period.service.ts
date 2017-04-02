import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Period} from "./period.model";
import {CookieService} from "angular2-cookie/core";
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";

@Injectable()
export class PeriodService extends BaseService {

    apiUrl: string = 'http://localhost:8886/app.php/api/v1';
    entityName = 'period';
    urlEnd:string = 'periods';

    constructor(protected http: Http, protected cookieService: CookieService) {
        super();
    }

    getPeriods(date: string): Observable<Period[]> {
        return this.http.get(this.apiUrl + '/periods?date=' + date)
            .map(this.extractData)
            .catch(this.handleError);
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

    private extractData(res: Response) {
        return res.json().data;
    }


    private handleError(error: any): Observable<any> {
        console.log('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }
}