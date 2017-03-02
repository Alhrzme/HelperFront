import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {Task} from "../models/task.model";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {BaseTaskService} from "./base-task-service.service";

@Injectable()
export class TaskService extends BaseTaskService {
    constructor(protected http: Http) {
        super();
    }
    tasks : Task[] = [];
    apiUrl:string = 'http://localhost:8886/app_dev.php/api/v1/tasks';

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

    addTask (task : Task): Observable<Task> {
        return this.post(task);
    }

    editTask(task: Task): Observable<Task> {
        return this.put(task);
    }

    deleteTask (task : Task): Observable<Task> {
        return this.delete(task);
    }




}