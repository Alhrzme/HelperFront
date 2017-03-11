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

@Injectable()
export class TaskService extends BaseService {
    constructor(protected http: Http) {
        super();
    }
    tasks : Task[] = [];
    urlEnd:string = 'tasks';

    addTask (task : Task): Observable<Task> {
        return this.post(task);
    }

    generateTasks(task:RepetitiveTask) : Observable<Task> {
        return this.post(task, this.baseApiUrl + 'rtasks');
    }

    getTasks(date?:string) {
        if (date) {
            return this.gets('date=' + date);
        }

        return this.gets()
    }

    getTask(id:number) {
        return this.get(id);
    }

    editTask(task: Task): Observable<Task> {
        return this.put(task);
    }

    deleteTask (task : Task): Observable<Task> {
        return this.httpDelete(task);
    }




}