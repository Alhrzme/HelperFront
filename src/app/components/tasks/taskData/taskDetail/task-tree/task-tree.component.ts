import { Component, OnInit, Input } from '@angular/core';
import {Task} from "../../../../shared/tasks/task.model";

@Component({
	selector: 'task-tree',
	templateUrl: './task-tree.component.html',
	styleUrls: ['./task-tree.component.css']
})

export class TaskTreeComponent implements OnInit {

	@Input() task : Task;

	ngOnInit() { }
}