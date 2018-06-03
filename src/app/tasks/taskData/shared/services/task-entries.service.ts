import {Injectable} from '@angular/core';
import {BaseService} from "./base-service.service";
import {TaskEntry} from "../models/task-entry.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TaskEntriesService extends BaseService {

    tasks: TaskEntry[];
    constructor(protected http: HttpClient) {
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
