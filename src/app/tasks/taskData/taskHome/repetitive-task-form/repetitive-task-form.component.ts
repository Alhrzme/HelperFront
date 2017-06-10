import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as moment from 'moment';
import {MdSelectChange} from "@angular/material";
import {Task} from "../../shared/models/task.model";
import {TimeHelper} from "../../../../shared/services/time-helper.service";

@Component({
    selector: 'repetitive-task-form',
    templateUrl: './repetitive-task-form.component.html',
    styleUrls: ['./repetitive-task-form.component.css']
})
export class RepetitiveTaskFormComponent implements OnInit {

    @Input() task: Task = new Task();
    date: string;
    @Output() created: EventEmitter<Task> = new EventEmitter<Task>();
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
        if (this.task.condition.beginDate) {
            this.task.condition.beginDate = TimeHelper.getFormattedDateString(this.task.condition.beginDate);
        }
        if (this.task.condition.endDate) {
            this.task.condition.endDate = TimeHelper.getFormattedDateString(this.task.condition.endDate);
        }
        this.created.emit(this.task);
        this.task = new Task();
        this.setInitDates();
    }

    ngOnInit() {
        this.setInitDates();
        this.task.condition.weekFrequency = 1;
    }

    setInitDates() {
        this.task.condition.beginDate = moment().format(TimeHelper.INPUT_DATE_FORMAT);
        this.task.condition.endDate = moment().add(1, 'months').format(TimeHelper.INPUT_DATE_FORMAT);
    }
}
