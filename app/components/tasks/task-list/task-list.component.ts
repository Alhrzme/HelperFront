import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/tasks.service';

@Component({
	selector: 'task-list',
	templateUrl: './app/components/tasks/task-list/task-list.component.html',
    providers: [TaskService]
})

export class TaskListComponent {

    @Input() tasks:Task[];

    constructor(private taskService : TaskService) {

    }

}