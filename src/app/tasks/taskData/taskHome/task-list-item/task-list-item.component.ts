import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../shared/models/task.model";
import {MdDialog} from "@angular/material";
import {TaskMoveModalComponent} from "./task-move-modal/task-move-modal.component";
import {TimeHelper} from "../../../../shared/services/time-helper.service";
import {CookieService} from "angular2-cookie/core";

@Component({
    selector: 'task-list-item',
    templateUrl: 'task-list-item.component.html',
    styleUrls: ['task-list-item.component.css']
})

export class TaskListItemComponent implements OnInit {

    @Input() task: Task;
    @Output() deleted: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() edited: EventEmitter<Task> = new EventEmitter<Task>();

    constructor(private dialog: MdDialog, private cookieService:CookieService) {
    }

    ngOnInit() {
    }

    isDisplayMoveButton() {
        return this.task.date
            && this.task.deadline
            && TimeHelper.getDate(this.task.deadline).isAfter(TimeHelper.getDate(this.task.date));
    }

    confirm() {
        this.task.isCompleted = true;
        this.edited.emit(this.task);
    }

    moveTask() {
        let dialogRef = this.dialog.open(TaskMoveModalComponent, {
            width: '300px'
        });
        dialogRef.componentInstance.data = TimeHelper.getDateDiff(this.task.deadline, this.task.date, 'days');
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) {
                    this.task.date = TimeHelper.getDate(this.task.date)
                        .add(result, 'days')
                        .format(TimeHelper.DATE_FORMAT);
                    this.edited.emit(this.task);
                }
            }
        );
    }

    deleteTask() {
        this.deleted.emit(this.task);
    }
}