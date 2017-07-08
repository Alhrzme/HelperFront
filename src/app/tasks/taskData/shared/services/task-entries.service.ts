import {Injectable} from '@angular/core';
import {BaseService} from "./base-service.service";
import {CookieService} from "angular2-cookie/core";
import {Http} from "@angular/http";
import {TaskEntry} from "../models/task-entry.model";

@Injectable()
export class TaskEntriesService extends BaseService {

    tasks: TaskEntry[];
    constructor(protected http: Http, protected cookieService: CookieService) {
        super();
    }

    urlEnd: string = 'taskentries';
    entityName = 'taskentry';

    getTaskEntries(date?: string) {
        if (date) {
            return this.gets('date=' + date);
        }

        return this.gets()
    }

    editEntry(taskEntry: TaskEntry) {
        let clonedEntry = JSON.parse(JSON.stringify(taskEntry));
        delete clonedEntry.task;
        return this.put(clonedEntry);
    }

    confirmEntry(taskEntry: TaskEntry ) {
        return this.put(taskEntry, `${this.baseApiUrl + this.urlEnd}/confirm/${taskEntry.id}`)
    }

    deleteTaskEntry(taskEntry: TaskEntry) {
        return this.httpDelete(taskEntry);
    }
}
