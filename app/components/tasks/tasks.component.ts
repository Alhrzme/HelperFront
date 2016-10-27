import { Component, OnInit } from '@angular/core';

import {TaskService} from "./shared/tasks.service";
import { Task } from './shared/task.model'

@Component({
	selector: 'tasks',
	templateUrl: './app/components/tasks/tasks.component.html',
    providers: [TaskService]
})

export class TasksComponent implements OnInit {

    tasks : Task[];
    taskService: TaskService;

    constructor(taskService : TaskService) {
        this.taskService = taskService;
    }

    ngOnInit():void {
        this.tasks = this.taskService.getTasks();
    }

    onTaskCreated(task:Task) :void {
        this.taskService.addTask(task);
    }

}