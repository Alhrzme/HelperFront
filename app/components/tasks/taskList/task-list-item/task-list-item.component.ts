import {Component, OnInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';

import {Task} from "../../../shared/tasks/task.model";
declare var $ : any;

@Component({
	selector: 'task-list-item',
	templateUrl: './app/components/tasks/taskList/task-list-item/task-list-item.component.html',
	styleUrls: ['./app/components/tasks/taskList/task-list-item/task-list-item.component.css']
})

export class TaskListItemComponent implements OnInit {

	@Input() task: Task;
	@Output() deleted: EventEmitter<Task>;

	ngOnInit() {
		
	}

	constructor(private _ref : ElementRef) {
		this.deleted = new EventEmitter<Task>();
	}

	deleteTask() {
		this.deleted.emit(this.task);
	}


}