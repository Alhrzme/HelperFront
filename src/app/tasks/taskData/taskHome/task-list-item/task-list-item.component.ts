import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Task} from "../../../task.model";

@Component({
    selector: 'task-list-item',
    templateUrl: 'task-list-item.component.html',
    styleUrls: ['task-list-item.component.css']
})

export class TaskListItemComponent implements OnInit {

    @Input() task: Task;
    @Output() deleted: EventEmitter<Task> = new EventEmitter<Task>();
    @Output() edited : EventEmitter<Task> = new EventEmitter<Task>();

    ngOnInit() {
    }

    confirm() {
        this.task.isCompleted = true;
        this.edited.emit(this.task);
    }

    deleteTask() {
        this.deleted.emit(this.task);
    }
}