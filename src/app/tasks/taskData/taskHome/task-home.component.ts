import { Component, OnInit } from '@angular/core';

import { Task } from "../shared/models/task.model";
import { TaskService } from "../shared/services/tasks.service";
import {TaskEntriesService} from "../shared/services/task-entries.service";
import {TaskEntry} from "../shared/models/task-entry.model";

@Component({
    selector: 'tasks-home',
    templateUrl: 'task-home.component.html',
    styleUrls: ['task-home.component.css'],
    providers: [TaskService]
})

export class TaskHomeComponent implements OnInit {

    title : string = 'Задачи';
    tasks : TaskEntry[] = [];
    errorMessage : string;
    formsList = [
        {value: 'single', title: 'Одиночная'},
        {value: 'repetitive', title : 'Повторяющаяся'}
    ];
    selectedForm : string = 'single';

    constructor(
        private taskService : TaskService, private taskEntriesService: TaskEntriesService
    ) {
    }

    ngOnInit():void {
        this.taskEntriesService.getTaskEntries()
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
                (taskEntry: TaskEntry) => {
                    if (!this.tasks) {
                        this.tasks = [];
                    }
                    if (!taskEntry.date) {
                        this.tasks.push(taskEntry);
                    }
                },
                error => this.errorMessage = <any>error
            );
    }

    onTaskDeleted(task:TaskEntry) :void {
        let taskIndex = this.tasks.indexOf(task);
        this.taskEntriesService.deleteTaskEntry(task)
            .subscribe(
                task => this.deleteTask(taskIndex),
                error => this.errorMessage = <any>error
            );
    }

    onEntryConfirmed(task: TaskEntry) {
        console.log(task);
        console.log('in home');
        let taskIndex = this.tasks.indexOf(task);
        this.taskEntriesService.confirmEntry(task)
            .subscribe(
                task => {
                    if (task.isCompleted && taskIndex > -1) {
                        this.tasks.splice(taskIndex, 1);
                    }
                },
                error => console.log(error)
            )
    }

    onTaskEdited(task:TaskEntry) : void {
        let taskIndex = this.tasks.indexOf(task);
        this.taskEntriesService.editEntry(task)
            .subscribe(
                task => {
                    if (task.isCompleted && taskIndex > -1) {
                        this.tasks.splice(taskIndex, 1);
                    }
                },
                error => this.errorMessage = <any>error
            )
    }

    onRepetitiveTaskCreated(task : Task) : void {
        this.taskService.addTask(task)
            .subscribe(
                tasks => tasks,
                error => this.errorMessage = <any>error
            )
    }

    private deleteTask(taskIndex : number): void {
        if (taskIndex > -1) {
            this.tasks.splice(taskIndex, 1);
        }
    }

}