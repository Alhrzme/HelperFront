import { Component, OnInit, Input } from '@angular/core';
import {Task} from "../../../../shared/tasks/task.model";

@Component({
	selector: 'task-tree',
	templateUrl: './app/components/tasks/taskData/taskDetail/task-tree/task-tree.component.html',
	styleUrls: ['./app/components/tasks/taskData/taskDetail/task-tree/task-tree.component.css']
})

export class TaskTreeComponent implements OnInit {

	@Input() task : Task;

	ngOnInit() { }
}