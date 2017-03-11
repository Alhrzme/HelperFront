import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RepetitiveTask} from "../../shared/models/repetitive-task.model";
import * as moment from 'moment';
import {MdSelectChange} from "@angular/material";

@Component({
    selector: 'repetitive-task-form',
    templateUrl: './repetitive-task-form.component.html',
    styleUrls: ['./repetitive-task-form.component.css']
})
export class RepetitiveTaskFormComponent implements OnInit {

    @Input() task: RepetitiveTask = new RepetitiveTask();
    date: string;
    @Output() created: EventEmitter<RepetitiveTask> = new EventEmitter<RepetitiveTask>();
    daysOfWeek = [
        {value: 'mon', name: 'Понедельник', abr: 'пон'},
        {value: 'tue', name: 'Вторник', abr: 'вт'},
        {value: 'wed', name: 'Среда', abr: 'ср'},
        {value: 'thu', name: 'Четверг', abr: 'чт'},
        {value: 'fri', name: 'Пятница', abr: 'пт'},
        {value: 'sat', name: 'Суббота', abr: 'сб'},
        {value: 'sun', name: 'Воскресенье', abr: 'вс'},
        {value: 'every', name: 'Каждый день', abr: 'все'},
        {value: 'weekend', name: 'Выходные', abr: 'вых'},
        {value: 'weekdays', name: 'Будни', abr: 'будни'}
    ];

    constructor() {
    }

    onDayOfWeekInputChange(chosenDayOfWeek : MdSelectChange) {
        this.task.addDayOfWeek(chosenDayOfWeek.value);
    }

    getAbbreviation(dayOfWeekId) {
        for (let dayOfWeek of this.daysOfWeek) {
            if (dayOfWeek.value == dayOfWeekId) {
                return dayOfWeek.abr;
            }
        }

        return dayOfWeekId;
    }

    onSubmit() {
        this.task.description = this.task.title;
        this.created.emit(this.task);
        this.task = new RepetitiveTask();
        this.setInitDates();
    }

    ngOnInit() {
        this.setInitDates();
    }

    removeDayOfWeek(dayOfWeek) {
        this.task.removeDayOfWeek(dayOfWeek);
    }

    setInitDates() {
        this.task.beginDate = moment().format("YYYY-MM-DD");
        this.task.endDate = moment().add(1, 'months').format("YYYY-MM-DD");
    }
}
