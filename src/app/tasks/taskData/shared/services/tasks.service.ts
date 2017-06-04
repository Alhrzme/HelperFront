import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Task} from "../models/task.model";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {BaseService} from "./base-service.service";
import {RepetitiveTask} from "../models/repetitive-task.model";
import {CookieService} from "angular2-cookie/core";
import {TaskEntry} from "../models/task-entry.model";

@Injectable()
export class TaskService extends BaseService {
    constructor(protected http: Http, protected cookieService: CookieService) {
        super();
    }
    tasks : Task[] = [];
    urlEnd:string = 'tasks';
    entityName = 'task';

    addTask (task : Task): Observable<TaskEntry> {
        return this.post(task);
    }

    generateTasks(task:RepetitiveTask) : Observable<Task> {
        return this.post(task, this.baseApiUrl + 'rtasks');
    }

    editTask(task: Task): Observable<Task> {
        return this.put(task);
    }

    deleteTask (task : Task): Observable<Task> {
        return this.httpDelete(task);
    }
}