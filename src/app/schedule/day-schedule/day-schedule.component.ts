import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Period} from "../period.model";
import {PeriodService} from "../period.service";
import * as moment from 'moment';

@Component({
    selector: 'day-schedule',
    templateUrl: 'day-schedule.component.html',
    styleUrls: ['day-schedule.component.css']
})
export class DayScheduleComponent implements OnInit {

    periods: Period[];
    errorMessage:string = '';
    estimatedBegin = '07:00';
    estimatedEnd = '23:00';
    date:string;

    constructor(
        private route:ActivatedRoute,
        private periodService:PeriodService
    ) {
    }

    onPeriodCreated(period : Period) : void {
        this.periodService.postPeriod(period, this.date)
            .subscribe(
                period => {
                    this.periods.push(period);
                    this.periods = this.sortPeriods(this.periods)
                },
                error => this.errorMessage = <any>error
            );
    }

    public getEmptyPeriods() {
        let emptyPeriods = [];

    }

    private sortPeriods(periods) {
        if (periods) {
            return periods.sort(function (p1, p2) {
                return moment(p1.begin, "LT").isAfter(moment(p2, "LT")) ? 1 : -1;
            })
        } else {
            return [];
        }
    }

    ngOnInit() {
        this.route.params.forEach((params:Params) => {
            this.date = params['date'];
        });
        this.periodService.getPeriods(this.date)
            .subscribe(
                periods => this.periods = this.sortPeriods(periods),
                error => this.errorMessage = <any>error
            );
    }

}
