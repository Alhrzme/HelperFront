import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Period} from "./period.model";

@Injectable()
export class PeriodService {

    apiUrl: string = 'http://localhost:8886/app.php/api/v1';

    constructor(private http: Http) {
    }

    getPeriods(date: string): Observable<Period[]> {
        return this.http.get(this.apiUrl + '/periods?date=' + date)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postPeriod(period:Period, date: string): Observable<Period> {
        period.date = date;
        let body = JSON.stringify(period);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        return this.http.post(this.apiUrl + '/periods', body, options)
            .map(this.extractData)
            .catch(this.handleError)
    }

    putPeriod(period: Period): Observable<Period> {
        let body = JSON.stringify(period);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        return this.http.put(this.apiUrl + '/periods/' + period.id, body, options)
            .map(this.extractData)
            .catch(this.handleError)
    }

    deletePeriod(period: Period): Observable<Period> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        let url = `${this.apiUrl}/periods/${period.id}`;

        return this.http.delete(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json().data;
    }


    private handleError(error: any): Observable<any> {
        console.log('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }
}