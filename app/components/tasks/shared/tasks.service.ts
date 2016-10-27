import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


import {Task} from "./task.model";

@Injectable()
export class TaskService {

    tasks:Task[];
    apiUrl:string = 'http://helper:8887/app_dev.php/api/v1/tasks/25';

    constructor(private http: Http) {
        this.tasks = [
            new Task('task 1'),
            new Task('task 2'),
            new Task('task 3'),
            new Task('task 4')
        ];
    }

    getTasks(): Promise<Task[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    addTask(task:Task) {
        this.tasks.push(task);
    }

    private handleError(error: any): Promise<any> {
        console.log('Произошла ошибка', error);
        return Promise.reject(error.message || error);
    }
}