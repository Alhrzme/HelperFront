import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DialogPosition, MatDialog} from "@angular/material";
import {TaskMoveModalComponent} from "./task-move-modal/task-move-modal.component";
import {TimeHelper} from "../../../../shared/services/time-helper.service";
import {TaskEntry} from "../../shared/models/task-entry.model";
import {AlertModalComponent} from "../../../../shared/components/alert-modal/alert-modal.component";

@Component({
    selector: 'task-list-item',
    templateUrl: 'task-list-item.component.html',
    styleUrls: ['task-list-item.component.css']
})

export class TaskListItemComponent implements OnInit {
    @Input() lineLength;
    @Input() taskEntry: TaskEntry;
    @Output() deleted: EventEmitter<TaskEntry> = new EventEmitter<TaskEntry>();
    @Output() edited: EventEmitter<TaskEntry> = new EventEmitter<TaskEntry>();
    @Output() confirmed: EventEmitter<TaskEntry> = new EventEmitter<TaskEntry>();

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    isDisplayMoveButton() {
        return this.taskEntry.date
            && this.taskEntry.deadLine
            && TimeHelper.getDate(this.taskEntry.deadLine).isAfter(TimeHelper.getDate(this.taskEntry.date));
    }

    confirm() {
        this.taskEntry.isCompleted = true;
        this.confirmed.emit(this.taskEntry);
    }

    moveTask() {
        let dialogRef = this.dialog.open(TaskMoveModalComponent, {
            width: '300px',
        });
        dialogRef.componentInstance.data = TimeHelper.getDateDiff(this.taskEntry.deadLine, this.taskEntry.date, 'days');
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
        let dialogRef = this.dialog.open(AlertModalComponent, {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) {
                    this.deleted.emit(this.taskEntry);
                }
            }
        );
    }

    getTooltipText(lineLength) {
        const divideRest = lineLength % 10;
        const timesText = (([2,3, 4].indexOf(divideRest) > -1 && [12,13,14].indexOf(lineLength) == -1) ? 'раза' : 'раз');

        return 'Задача выполнена ' + lineLength + ' ' + timesText + ' подряд.'
    }
}