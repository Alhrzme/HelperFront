import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RepetitiveTask} from "../../shared/models/repetitive-task.model";
import * as moment from 'moment';
import {MdSelectChange} from "@angular/material";
import {DaysOfWeek} from "../../../../shared/common/DaysOfWeek";

@Component({
    selector: 'repetitive-task-form',
    templateUrl: './repetitive-task-form.component.html',
    styleUrls: ['./repetitive-task-form.component.css']
})
export class RepetitiveTaskFormComponent implements OnInit {

    @Input() task: RepetitiveTask = new RepetitiveTask();
    date: string;
    @Output() created: EventEmitter<RepetitiveTask> = new EventEmitter<RepetitiveTask>();
    daysOfWeek = DaysOfWeek.getDaysOfWeek();

    weekFrequencyData = DaysOfWeek.getWeekFrequencyData();

    deadlineStringList = [
        {value: 0, title: 'В тот же день'},
        {value: 1, title: 'Через 1 день'},
        {value: 2, title: 'Через 2 дня'},
        {value: 3, title: 'Через 3 дня'},
        {value: 4, title: 'Через 4 дня'},
        {value: 5, title: 'Через 5 дней'},
    ];

    constructor() {
    }

    onSubmit() {
        this.task.description = this.task.title;
        this.created.emit(this.task);
        this.task = new RepetitiveTask();
        this.setInitDates();
    }

    ngOnInit() {
        this.setInitDates();
        this.task.weekFrequency = 1;
    }

    setInitDates() {
        this.task.beginDate = moment().format("YYYY-MM-DD");
        this.task.endDate = moment().add(1, 'months').format("YYYY-MM-DD");
    }
}
