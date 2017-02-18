import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Period} from "../period.model";
import {PeriodService} from "../period.service";
import {TimeHelperService} from "../../shared/services/time-helper.service";
import {TimePeriod} from "../../shared/models/timePeriod";

@Component({
    selector: 'day-schedule',
    templateUrl: 'day-schedule.component.html',
    styleUrls: ['day-schedule.component.css']
})
export class DayScheduleComponent implements OnInit {

    periods: Period[] = [];
    errorMessage: string = '';
    estimatedBegin = '07:00';
    estimatedEnd = '23:00';
    date: string;
    emptyPeriods: TimePeriod[] = [];

    constructor(private route: ActivatedRoute,
                private periodService: PeriodService) {
    }

    onPeriodCreated(period: Period): void {
        this.periodService.postPeriod(period, this.date)
            .subscribe(
                period => {
                    this.periods.push(period);
                    this.periods = TimeHelperService.sortPeriods(this.periods)
                },
                error => this.errorMessage = <any>error
            );
    }

    private getEmptyPeriods() {
        return TimeHelperService.getEmptyPeriods(this.periods, this.estimatedBegin, this.estimatedEnd);
    }

    getFormBeginTime() {
        if (this.emptyPeriods.length > 0) {
            return this.emptyPeriods[0].begin.format("HH:mm");
        }
        return this.estimatedBegin;
    }

    getFormEndTime() {
        if (this.emptyPeriods.length > 0) {
            return this.emptyPeriods[0].end.format("HH:mm");
        }
        return this.estimatedEnd;
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.date = params['date'];
        });
        this.periodService.getPeriods(this.date)
            .subscribe(
                periods => {
                    this.periods = TimeHelperService.sortPeriods(periods);
                    this.emptyPeriods = this.getEmptyPeriods();
                },
                error => this.errorMessage = <any>error
            );
    }

}
