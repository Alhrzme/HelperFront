import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

import {Task} from "../../../task.model";

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
        this.created.emit(this.task);
        this.task = new Task();
    }

    ngOnInit() {
    }
}