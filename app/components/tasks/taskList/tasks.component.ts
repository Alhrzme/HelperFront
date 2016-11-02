import { Component, OnInit } from '@angular/core';

import {TaskService} from "./../shared/tasks.service";
import { Task } from './../shared/task.model'

@Component({
	selector: 'tasks',
	templateUrl: './app/components/tasks/taskList/tasks.component.html',
    providers: [TaskService]
})

export class TasksComponent implements OnInit {

    tasks : Task[] = [];
    taskService: TaskService;
    errorMessage : string;

    constructor(taskService : TaskService) {
        this.taskService = taskService;
    }

    ngOnInit():void {
        this.taskService.getTasks()
            .subscribe(
                tasks => this.tasks = tasks,
                error => this.errorMessage = <any>error
            );
    }

    onTaskCreated(task:Task) :void {
        this.taskService.addTask(task)
            .subscribe(
                task => this.tasks.push(task),
                error => this.errorMessage = <any>error
            );
    }

    onTaskDeleted(task:Task) :void {
        this.taskService.deleteTask(task)
            .subscribe(
                task => this.deleteTask(task),
                error => this.errorMessage = <any>error
            );
    }

    private deleteTask(task: Task): void {
        let index = this.tasks.indexOf(task);

        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }

}