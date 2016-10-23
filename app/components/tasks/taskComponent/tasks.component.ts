import { Component, OnInit } from '@angular/core';

import { Tasks } from '../shared/tasks.model';
import { TasksService } from '../shared/tasks.service';

@Component({
	selector: 'tasks',
	templateUrl: 'tasks.component.html',
	providers: [TasksService]
})

export class TasksComponent implements OnInit {
	tasks: Tasks[] = [];

	constructor(private tasksService: TasksService) { }

	ngOnInit() {
		this.tasksService.getList().subscribe((res) => {
			this.tasks = res;
		});
	}
}