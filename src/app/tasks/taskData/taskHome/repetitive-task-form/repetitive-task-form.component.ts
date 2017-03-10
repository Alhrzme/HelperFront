import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {RepetitiveTask} from "../../shared/models/repetitive-task.model";
import {ActivatedRoute, Params} from "@angular/router";
import * as moment from 'moment';

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
        {value: 'sun', name: 'Воскресенье', abr: 'вс'}
    ];

    chosenDayOfWeek: string;

    constructor(private route:ActivatedRoute) {
    }

    onDayOfWeekInputChange() {
        this.task.addDayOfWeek(this.chosenDayOfWeek);
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
        console.log(this.chosenDayOfWeek);
        this.created.emit(this.task);
        this.task = new RepetitiveTask();
        this.setInitDates();
    }

    ngOnInit() {
        this.setInitDates();
    }

    setInitDates() {
        this.task.beginDate = moment().format("YYYY-MM-DD");
        this.task.endDate = moment().add(1, 'months').format("YYYY-MM-DD");
    }
}
