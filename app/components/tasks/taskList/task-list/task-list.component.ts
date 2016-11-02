import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../shared/task.model';
import { TaskService } from '../../shared/tasks.service';

@Component({
	selector: 'task-list',
	templateUrl: './app/components/tasks/taskList/task-list/task-list.component.html',
    providers: [TaskService]
})

export class TaskListComponent {

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