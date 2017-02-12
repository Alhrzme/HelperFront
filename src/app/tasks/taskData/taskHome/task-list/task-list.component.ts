import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Task} from "../../../task.model";
import { TaskService } from "../../../tasks.service";

@Component({
	selector: 'task-list',
	templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.css'],
    providers: [TaskService]
})

export class TaskListComponent implements OnInit {

    ngOnInit():void {
    }

    @Input() tasks:Task[];
    @Output() deleted : EventEmitter<Task>;

    constructor() {
        this.deleted = new EventEmitter<Task>();
    }

    get sortedTasks(): Task[] {
        return this.tasks
            .map(task => task)
            .sort((a, b) => {
                if (a.title > b.title) return 1;
                else if (a.title < b.title) return -1;
                else return 0;
            });
    }

    onTaskDeleted(task: Task): void {
        this.deleted.emit(task);
    }

}