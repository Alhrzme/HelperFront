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

    weekFrequencyData = [
        {value: 1, name : 'Каждую неделю'},
        {value: 2, name : 'Каждую вторую'},
        {value: 3, name : 'Каждую третью'},
        {value: 4, name : 'Каждую четвертую'},
        {value: 5, name : 'Каждую пятую'},
        {value: 6, name : 'Каждую шестую'},
        {value: 7, name : 'Каждую седьмую'},
        {value: 8, name : 'Каждую восьмую'},
        {value: 9, name : 'Каждую девятую'},
        {value: 10, name : 'Каждую десятую'},
        {value: 11, name : 'Каждую одинадцатую'},
        {value: 12, name : 'Каждую двенадцатую'},
    ];

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
        this.task.weekFrequency = 1;
    }

    removeDayOfWeek(dayOfWeek) {
        this.task.removeDayOfWeek(dayOfWeek);
    }

    setInitDates() {
        this.task.beginDate = moment().format("YYYY-MM-DD");
        this.task.endDate = moment().add(1, 'months').format("YYYY-MM-DD");
    }
}
