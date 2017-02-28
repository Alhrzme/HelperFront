import { Component, OnInit } from '@angular/core';

import { Task } from "../../task.model";
import { TaskService } from "../../tasks.service";
import {RepetitiveTask} from "../../repetitive-task.model";

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

    onRepetitiveTaskCreated(task:RepetitiveTask):void {
        this.taskService
    }

    onTaskDeleted(task:Task) :void {
        let taskIndex = this.tasks.indexOf(task);
        this.taskService.deleteTask(task)
            .subscribe(
                task => this.deleteTask(taskIndex),
                error => this.errorMessage = <any>error
            );
    }

    onTaskEdited(task:Task) : void {
        this.taskService.editTask(task)
            .subscribe(
                task => task,
                error => this.errorMessage = <any>error
            )

    }

    private deleteTask(taskIndex : number): void {

        if (taskIndex > -1) {
            this.tasks.splice(taskIndex, 1);
        }
    }

}