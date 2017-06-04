import {Injectable} from '@angular/core';
import {BaseService} from "./base-service.service";
import {CookieService} from "angular2-cookie/core";
import {Http} from "@angular/http";
import {TaskEntry} from "../models/task-entry.model";

@Injectable()
export class TaskEntriesService extends BaseService {

    constructor(protected http: Http, protected cookieService: CookieService) {
        super();
    }

    urlEnd: string = 'taskentries';
    entityName = 'taskEntry';

    getTaskEntries(date?: string) {
            if (date) {
                return this.gets('date=' + date);
            }

            return this.gets()
    }

    editEntry(taskEntry: TaskEntry) {
        return this.put(taskEntry);
    }

    deleteTaskEntry(taskEntry: TaskEntry) {
        return this.httpDelete(taskEntry);
    }
}
