import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TaskService } from "../../shared/services/tasks.service";
import {TaskEntry} from "../../shared/models/task-entry.model";

@Component({
	selector: 'task-list',
	templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.css'],
    providers: [TaskService]
})

export class TaskListComponent {

    @Input() taskEntries:TaskEntry[];
    @Output() deleted : EventEmitter<TaskEntry> = new EventEmitter<TaskEntry>();
    @Output() edited : EventEmitter<TaskEntry> = new EventEmitter<TaskEntry>();

    get sortedTasks(): TaskEntry[] {
        return this.taskEntries
            .map(task => task)
            .sort((a, b) => {
                if (a.task.title > b.task.title) return 1;
                else if (a.task.title < b.task.title) return -1;
                else return 0;
            });
    }

    onTaskEdited(task:TaskEntry) {
        this.edited.emit(task);
    }

    onTaskDeleted(task: TaskEntry): void {
        this.deleted.emit(task);
    }

}