import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Task} from "../../../../shared/tasks/task.model";

@Component({
	selector: 'task-list-item',
	templateUrl: './task-list-item.component.html',
	styleUrls: ['./task-list-item.component.css']
})

export class TaskListItemComponent implements OnInit {

	@Input() task: Task;
	@Output() deleted: EventEmitter<Task>;

	ngOnInit() {
	}

	constructor() {
		this.deleted = new EventEmitter<Task>();
	}

	deleteTask() {
		this.deleted.emit(this.task);
	}


}