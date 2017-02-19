import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Period} from "../../period.model";
import {ActivatedRoute, Params} from "@angular/router";
import * as moment from 'moment';
import {TimePeriod} from "../../../shared/models/timePeriod";
import {TimeHelperService} from "../../../shared/services/time-helper.service";
import {NgForm} from "@angular/forms";


@Component({
    selector: 'period-form',
    templateUrl: 'period-form.component.html',
    styleUrls: ['period-form.component.css']
})
export class PeriodFormComponent implements OnInit {

    @Output() created: EventEmitter<Period>;
    @Input() period:Period = new Period('07:00', '09:00');
    @Input() periods: Period[];
    date: string;
    beginTime:string = '07:00';
    endTime:string = '23:00';
    emptyIntervals : TimePeriod[];

    constructor(private route: ActivatedRoute) {
        this.created = new EventEmitter<Period>();
    }

    onSubmit() {
        this.created.emit(this.period);
        this.period.description = null;
        this.emptyIntervals = this.getEmptyIntervals();
        let lastEmptyInterval = this.emptyIntervals[this.emptyIntervals.length - 1];
        this.period.begin = lastEmptyInterval.begin.format('HH:mm');
        this.period.end = lastEmptyInterval.end.format('HH:mm');
    }

    inputChange(beginInput: HTMLInputElement, endInput:HTMLInputElement) {
        let end = moment(endInput.value, "LT");
        let begin = moment(beginInput.value, "LT");
        if (end.isSameOrBefore(begin) || endInput.value == '') {
            endInput.value = begin.add(1, "minutes").format("HH:mm");
        }
    }

    getEmptyIntervals() {
        return TimeHelperService.getEmptyPeriods(this.periods, this.beginTime, this.endTime);
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.date = params['date'];
        });
    }
}
