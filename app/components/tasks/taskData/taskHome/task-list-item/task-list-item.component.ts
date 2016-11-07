import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Task} from "../../../../shared/tasks/task.model";
declare var $ : any;

@Component({
	selector: 'task-list-item',
	templateUrl: './app/components/tasks/taskData/taskHome/task-list-item/task-list-item.component.html',
	styleUrls: ['./app/components/tasks/taskData/taskHome/task-list-item/task-list-item.component.css'],
	directives: []
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
		var thisComponent = this;
		$('.ui.basic.modal')
			.modal('show')
			.modal({
				onDeny : function () {
				},
				onApprove : function() {
					thisComponent.deleted.emit(thisComponent.task);
				}
			})
		;
	}


}