import { Injectable } from '@angular/core';

import {Task} from "../models/task.model";
import {BaseService} from "./base-service.service";
import {TaskEntry} from "../models/task-entry.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class TaskService extends BaseService {
    constructor(protected http: HttpClient) {
        super();
    }
    tasks : Task[] = [];
    urlEnd:string = 'tasks';
    entityName = 'task';

    getTasks() {
        return this.gets();
    }

    addTask (task : Task): Observable<TaskEntry> {
        return this.post(task, this.baseApiUrl + this.urlEnd, true);
    }

    editTask(task: Task) {
        return this.put(task);
    }

    deleteTask (task : Task) {
        return this.httpDelete(task);
    }

    getTaskLinesLengths(tasksIds, date) {
        let url = this.baseApiUrl + 'tasks_line_lengths';
        url = this.addTokenToRequest(url);

        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        const body = JSON.stringify({tasksIds: tasksIds, date: date});

        return this.http.post(url, body, {headers}).pipe(
            map(BaseService.extractData),
            catchError(BaseService.handleError));
    }

    getNumberOfDaysWithCompletedTasks(date) {
        let url = this.baseApiUrl + 'length_of_completed_tasks?date=' + date;
        url = this.addTokenToRequest(url, true);

        return this.http.get(url).pipe(
            map(BaseService.extractData),
            catchError(BaseService.handleError));
    }
}