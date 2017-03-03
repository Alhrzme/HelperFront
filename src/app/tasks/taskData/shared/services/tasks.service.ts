import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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
    urlEnd:string = 'tasks';

    addTask (task : Task): Observable<Task> {
        return this.post(task);
    }

    getTasks() {
        return this.gets()
    }

    getTask(id:number) {
        return this.get(id);
    }

    editTask(task: Task): Observable<Task> {
        return this.put(task);
    }

    deleteTask (task : Task): Observable<Task> {
        return this.delete(task);
    }




}