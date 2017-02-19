import { Component, OnInit } from '@angular/core';

import { Task } from "../../task.model";
import { TaskService } from "../../tasks.service";

@Component({
    selector: 'tasks-home',
    templateUrl: 'task-home.component.html',
    styleUrls: ['task-home.component.css'],
    providers: [TaskService]
})

export class TaskHomeComponent implements OnInit {

    title : string = 'Задачи';
    tasks : Task[] = [];
    errorMessage : string;

    constructor(
        private taskService : TaskService,
    ) {
    }

    ngOnInit():void {
        this.taskService.getTasks()
            .subscribe(
                tasks => {
                    this.tasks = tasks;
                },
                error => this.errorMessage = <any>error
            );
    }


    onTaskCreated(task:Task) :void {
        this.taskService.addTask(task)
            .subscribe(
                (task) => {
                    if (!this.tasks) {
                        this.tasks = [];
                    }
                    this.tasks.push(task);
                },
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