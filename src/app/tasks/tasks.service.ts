import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {Task} from "./task.model";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class TaskService {

    tasks : Task[] = [];
    apiUrl:string = 'http://localhost:8886/app.php/api/v1/tasks';

    constructor(private http: Http) {
    }

    getTasks(): Observable<Task[]> {
        return this.http.get(this.apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getTask(id : number) : Observable<Task> {
        return this.http.get(this.apiUrl + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        return res.json().data;
    }

    addTask (task : Task): Observable<Task> {
        return this.post(task);
    }

    deleteTask (task : Task): Observable<Task> {
        return this.delete(task);
    }

    private post(task: Task): Observable<Task> {
        let body = JSON.stringify(task);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(this.apiUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError)
    }

    private delete(task: Task): Observable<Task> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${task.id}`;

        return this.http.delete(url, options)
            .map(res => task)
            .catch(this.handleError);
    }


    private handleError(error: any): Observable<any> {
        console.log('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }
}