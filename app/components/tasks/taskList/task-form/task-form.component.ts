import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Task} from "../../../shared/tasks/task.model";
declare var $ : any;

@Component({
	selector: 'task-form',
	templateUrl: './app/components/tasks/taskList/task-form/task-form.component.html'
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
		} else {
			$('input')
				.transition('flash')
			;
		}
	}

	ngOnInit() { }
}