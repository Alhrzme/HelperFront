import { Component, OnInit } from '@angular/core';

import { Task } from "../shared/models/task.model";
import { TaskService } from "../shared/services/tasks.service";
import {RepetitiveTask} from "../shared/models/repetitive-task.model";
import {AbstractTask} from "../shared/models/abstract-task.model";
import {RepetitiveTasksService} from "../shared/services/repetitive-tasks.service";

@Component({
    selector: 'tasks-home',
    templateUrl: 'task-home.component.html',
    styleUrls: ['task-home.component.css'],
    providers: [TaskService]
})

export class TaskHomeComponent implements OnInit {

    title : string = 'Задачи';
    tasks : AbstractTask[] = [];
    repetitiveTasks:RepetitiveTask[] = [];
    errorMessage : string;

    constructor(
        private taskService : TaskService,
        private repetitiveTaskService: RepetitiveTasksService
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
        this.repetitiveTaskService.addTask(task)
            .subscribe(
                (task) => {
                    if (!this.repetitiveTasks) {
                        this.repetitiveTasks = [];
                    }
                    this.repetitiveTasks.push(task);
                },
                error => this.errorMessage = <any>error
            );
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