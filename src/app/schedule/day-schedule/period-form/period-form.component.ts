import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Period} from "../../period.model";
import {ActivatedRoute, Params} from "@angular/router";
import * as moment from 'moment';


@Component({
    selector: 'period-form',
    templateUrl: 'period-form.component.html',
    styleUrls: ['period-form.component.css']
})
export class PeriodFormComponent implements OnInit {

    @Output() created: EventEmitter<Period>;
    date: string;

    constructor(private route: ActivatedRoute) {
        this.created = new EventEmitter<Period>();
    }

    create(begin: HTMLInputElement, end: HTMLInputElement, description: HTMLInputElement) {
        let beginValue = begin.value;
        let endValue = end.value;
        let descriptionValue = description.value;
        if (beginValue && endValue && descriptionValue) {
            let schedule = new Period(beginValue, endValue, descriptionValue);
            this.created.emit(schedule);
            description.value = description.defaultValue;
            begin.value = endValue;
        }
    }

    inputChange(beginInput: HTMLInputElement, endInput:HTMLInputElement) {
        let end = moment(endInput.value, "LT");
        let begin = moment(beginInput.value, "LT");
        if (end.isSameOrBefore(begin) || endInput.value == '') {
            endInput.value = begin.add(1, "minutes").format("HH:mm");
        }
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.date = params['date'];
        });
    }
}
