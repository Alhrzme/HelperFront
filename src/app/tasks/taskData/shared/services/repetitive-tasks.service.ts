import { Injectable } from '@angular/core';
import {BaseTaskService} from "./base-task-service.service";
import {RepetitiveTask} from "../models/repetitive-task.model";
import {Observable} from "rxjs";

@Injectable()
export class RepetitiveTasksService extends BaseTaskService {

    protected urlEnd:string = 'rtasks';

    addTask(task:RepetitiveTask) : Observable<RepetitiveTask> {
        return this.post(task);
    }

}
