import { Component, OnInit } from '@angular/core';

import { Task } from '../shared/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
	selector: 'task-list',
	templateUrl: './app/components/tasks/task-list/task-list.component.html',
    providers: [TaskItemComponent]
})

export class TaskListComponent implements OnInit {
	tasks : Task[] = [
	    new Task('first task'),
        new Task('second task'),
        new Task('third task')
    ];
	ngOnInit() { }
}