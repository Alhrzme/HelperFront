import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ScheduleService {

    tasks : Task[] = [];
    apiUrl:string = 'http://helper:8886/app_dev.php/api/v1/tasks';

    constructor(private http: Http) {

    }


    private handleError(error: any): Observable<any> {
        console.log('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }
}