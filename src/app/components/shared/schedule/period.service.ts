import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Period} from "./period.model";

@Injectable()
export class PeriodService {

  apiUrl:string = 'http://helper:8886/app_dev.php/api/v1/periods';

  constructor(private http: Http) {

  }

  getPeriods() : Observable<Period> {
    return this.http.get(this.apiUrl)
        .map(this.extractData)
        .catch(this.handleError);
  }

  postPeriod(period: Period, date : string): Observable<Period> {
    let body = JSON.stringify(period);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });

    return this.http.post(this.apiUrl + '/' + date, body, options)
        .map(this.extractData)
        .catch(this.handleError)
  }

   deletePeriod(period: Period): Observable<Period> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });

    let url = `${this.apiUrl}/${period.id}`;

    return this.http.delete(url, options)
        .map(res => period)
        .catch(this.handleError);
  }

  private extractData(res:Response) {
    return res.json();
  }


  private handleError(error: any): Observable<any> {
    console.log('Произошла ошибка', error);
    return Observable.throw(error.message || error);
  }
}