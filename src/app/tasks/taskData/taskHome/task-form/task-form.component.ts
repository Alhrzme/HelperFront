import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Task} from "../../../task.model";

@Component({
	selector: 'task-form',
	templateUrl: 'task-form.component.html',
	styleUrls: ['task-form.component.css']
})

export class TaskFormComponent implements OnInit {

	@Output() created: EventEmitter<Task>;

	constructor() {
		this.created = new EventEmitter<Task>()
	}

	create(title:string, taskTitle : HTMLInputElement) {
		if (title) {
			let task = new Task(title, title);
			taskTitle.value = '';
			this.created.emit(task);
		}
	}

	ngOnInit() { }
}