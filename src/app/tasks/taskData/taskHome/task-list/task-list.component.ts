import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Task} from "../../shared/models/task.model";
import { TaskService } from "../../shared/services/tasks.service";

@Component({
	selector: 'task-list',
	templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.css'],
    providers: [TaskService]
})

export class TaskListComponent {

    @Input() tasks:Task[];
    @Output() deleted : EventEmitter<Task> = new EventEmitter<Task>();
    @Output() edited : EventEmitter<Task> = new EventEmitter<Task>();

    get sortedTasks(): Task[] {
        return this.tasks
            .map(task => task)
            .sort((a, b) => {
                if (a.title > b.title) return 1;
                else if (a.title < b.title) return -1;
                else return 0;
            });
    }

    onTaskEdited(task:Task) {
        this.edited.emit(task);
    }

    onTaskDeleted(task: Task): void {
        this.deleted.emit(task);
    }

}