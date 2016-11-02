import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Task} from "../../shared/task.model";


@Component({
	selector: 'task-form',
	templateUrl: './app/components/tasks/taskList/task-form/task-form.component.html'
})

export class TaskFormComponent implements OnInit {

	@Output() created: EventEmitter<Task>;

	constructor() {
		this.created = new EventEmitter<Task>()
	}

	create(title:string, body: string) {
		if (body && title) {
			let task = new Task(body, title);
			this.created.emit(task);
		}
	}

	ngOnInit() { }
}