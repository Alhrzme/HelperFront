import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RepetitiveTask} from "../../../repetitive-task.model";

@Component({
    selector: 'repetitive-task-form',
    templateUrl: './repetitive-task-form.component.html',
    styleUrls: ['./repetitive-task-form.component.css']
})
export class RepetitiveTaskFormComponent implements OnInit {

    @Input() task:RepetitiveTask = new RepetitiveTask();
    @Output() created: EventEmitter<RepetitiveTask> = new EventEmitter<RepetitiveTask>();

    constructor() {
    }

    onSubmit() {
        this.created.emit(this.task);
        this.task = new RepetitiveTask();
    }

    ngOnInit() {
    }

}
