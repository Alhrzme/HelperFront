import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../shared/task.model'

@Component({
	selector: 'task-item',
	templateUrl: './app/components/tasks/task-item/task-item.component.html',
	styleUrls: ['./app/components/tasks/task-item/task-item.component.css']
})

export class TaskItemComponent implements OnInit {

	@Input() task: Task;
	@Output() deleted: EventEmitter<Task>;

	ngOnInit() { }

	constructor() {
		this.deleted = new EventEmitter<Task>();
	}

	deleteTask() {
		this.deleted.emit(this.task);
	}
}