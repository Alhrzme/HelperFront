import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Task} from "../shared/task.model";


@Component({
	selector: 'task-form',
	templateUrl: './app/components/tasks/task-form/task-form.component.html'
})

export class TaskFormComponent implements OnInit {

	@Output() created: EventEmitter<Task>;

	constructor() {
		this.created = new EventEmitter<Task>()
	}

	create(body: string) {
		if (body) {
			let task = new Task(body, body);
			this.created.emit(task);
		}
	}

	ngOnInit() { }
}