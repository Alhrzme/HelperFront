import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../shared/models/task.model";
import {MdDialog} from "@angular/material";
import {TaskMoveModalComponent} from "./task-move-modal/task-move-modal.component";
import {TimeHelper} from "../../../../shared/services/time-helper.service";
import {CookieService} from "angular2-cookie/core";
import {TaskEntry} from "../../shared/models/task-entry.model";

@Component({
    selector: 'task-list-item',
    templateUrl: 'task-list-item.component.html',
    styleUrls: ['task-list-item.component.css']
})

export class TaskListItemComponent implements OnInit {

    @Input() taskEntry: TaskEntry;
    @Output() deleted: EventEmitter<TaskEntry> = new EventEmitter<TaskEntry>();
    @Output() edited: EventEmitter<TaskEntry> = new EventEmitter<TaskEntry>();

    constructor(private dialog: MdDialog) {
    }

    ngOnInit() {
    }

    isDisplayMoveButton() {
        return this.taskEntry.date
            && this.taskEntry.deadline
            && TimeHelper.getDate(this.taskEntry.deadline).isAfter(TimeHelper.getDate(this.taskEntry.date));
    }

    confirm() {
        this.taskEntry.isCompleted = true;
        this.edited.emit(this.taskEntry);
    }

    moveTask() {
        let dialogRef = this.dialog.open(TaskMoveModalComponent, {
            width: '300px'
        });
        dialogRef.componentInstance.data = TimeHelper.getDateDiff(this.taskEntry.deadline, this.taskEntry.date, 'days');
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) {
                    this.taskEntry.date = TimeHelper.getDate(this.taskEntry.date)
                        .add(result, 'days')
                        .format(TimeHelper.DATE_FORMAT);
                    this.edited.emit(this.taskEntry);
                }
            }
        );
    }

    deleteTask() {
        this.deleted.emit(this.taskEntry);
    }
}