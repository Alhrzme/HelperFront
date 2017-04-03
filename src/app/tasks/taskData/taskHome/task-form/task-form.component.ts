import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

import {Task} from "../../shared/models/task.model";
import {TimeHelper} from "../../../../shared/services/time-helper.service";

@Component({
    selector: 'task-form',
    templateUrl: 'task-form.component.html',
    styleUrls: ['task-form.component.css']
})

export class TaskFormComponent implements OnInit {

    @Output() created: EventEmitter<Task>;
    @Input() task : Task = new Task();

    constructor() {
        this.created = new EventEmitter<Task>()
    }

    onSubmit() {
        this.task.description = this.task.title;
        if (this.task.date) {
            this.task.date = TimeHelper.getFormattedDateString(this.task.date);
        }
        if (this.task.deadline) {
            this.task.deadline = TimeHelper.getFormattedDateString(this.task.deadline);
        }

        this.created.emit(this.task);
        this.task = new Task();
    }

    ngOnInit() {
    }
}