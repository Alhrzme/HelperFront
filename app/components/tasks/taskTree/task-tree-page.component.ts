import {Component, OnInit, Input} from '@angular/core';
import {Task} from "../../shared/tasks/task.model";
import { TaskService } from "../../shared/tasks/tasks.service";

@Component({
	selector: 'task-tree-page',
	templateUrl: './app/components/tasks/taskTree/task-tree-page.component.html',
	styleUrls: ['./app/components/tasks/taskTree/task-tree-page.component.css'],
    providers: [TaskService]
})

export class TaskTreePageComponent implements OnInit {

	@Input() id : number;
	title: string = 'Задача';
	task: Task;
	taskService : TaskService;

	constructor(taskService : TaskService) {
		this.taskService = taskService;
	}

	ngOnInit() { }
}