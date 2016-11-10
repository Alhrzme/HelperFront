import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Task} from "../../../../shared/tasks/task.model";

@Component({
	selector: 'task-form',
	templateUrl: './task-form.component.html'
})

export class TaskFormComponent implements OnInit {

	@Output() created: EventEmitter<Task>;

	constructor() {
		this.created = new EventEmitter<Task>()
	}

	create(title:string) {
		if (title) {
			let task = new Task(title, title);
			this.created.emit(task);
		}
	}

	ngOnInit() { }
}