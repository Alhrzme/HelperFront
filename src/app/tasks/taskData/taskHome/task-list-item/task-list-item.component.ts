import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../shared/models/task.model";
import {MdDialog} from "@angular/material";
import {TaskMoveModalComponent} from "./task-move-modal/task-move-modal.component";
import {ActivatedRoute} from "@angular/router";
import * as moment from 'moment';


@Component({
    selector: 'task-list-item',
    templateUrl: 'task-list-item.component.html',
    styleUrls: ['task-list-item.component.css']
})

export class TaskListItemComponent implements OnInit {

    @Input() task: Task;
    @Output() deleted: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() edited: EventEmitter<Task> = new EventEmitter<Task>();

    constructor(private dialog: MdDialog) {
    }

    ngOnInit() {
    }

    isDisplayMoveButton() {
        return this.task.date
            && this.task.deadline
            && moment(this.task.deadline, "DDMMYYYY").isAfter(moment(this.task.date, "DDMMYYYY"));
    }

    confirm() {
        this.task.isCompleted = true;
        this.edited.emit(this.task);
    }

    moveTask() {
        let dialogRef = this.dialog.open(TaskMoveModalComponent, {
            width: '300px',
        });
        dialogRef.afterClosed().subscribe(
            result => {
                this.task.date = moment(this.task.date, 'DDMMYYYY').add(result, 'days').format('DDMMYYYY');
                this.edited.emit(this.task);
                console.log(this.task);
            }
        );
    }

    deleteTask() {
        this.deleted.emit(this.task);
    }
}