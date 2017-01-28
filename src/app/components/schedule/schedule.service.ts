import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Schedule} from "./schedule.model";

@Injectable()
export class ScheduleService {

    apiUrl:string = 'http://localhost:8886/app.php/api/v1/schedules';

    constructor(private http: Http) {

    }

    getSchedule(date : string) : Observable<Schedule> {
        return this.http.get(this.apiUrl + '/' + date)
            .map(ScheduleService.extractData)
            .catch(this.handleError);
    }

    postSchedule(schedule: Schedule): Observable<Schedule> {
        let body = JSON.stringify(schedule);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(this.apiUrl, body, options)
            .map(ScheduleService.extractData)
            .catch(this.handleError)
    }

    private deleteSchedule(schedule: Schedule): Observable<Schedule> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${schedule.id}`;

        return this.http.delete(url, options)
            .map(res => schedule)
            .catch(this.handleError);
    }

    private static extractData(res:Response) {
        if (res.json().success) {
            return res.json().data.schedule;
        }

        return null;
    }


    private handleError(error: any): Observable<any> {
        console.log('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }
}