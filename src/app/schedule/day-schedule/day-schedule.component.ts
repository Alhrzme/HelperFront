import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Period} from "../period.model";
import {PeriodService} from "../period.service";

@Component({
    selector: 'day-schedule',
    templateUrl: 'day-schedule.component.html',
    styleUrls: ['day-schedule.component.css']
})
export class DayScheduleComponent implements OnInit {

    periods: Period[];
    errorMessage:string = '';
    date:string;

    constructor(
        private route:ActivatedRoute,
        private periodService:PeriodService
    ) {
    }

    onPeriodCreated(period : Period) : void {
        this.periodService.postPeriod(period, this.date)
            .subscribe(
                period => this.periods.push(period),
                error => this.errorMessage = <any>error
            );
    }

    public getEmptyPeriods() {

    }

    ngOnInit() {
        this.route.params.forEach((params:Params) => {
            this.date = params['date'];
        });
        this.periodService.getPeriods(this.date)
            .subscribe(
                periods => {this.periods = periods; console.log(periods);},
                error => this.errorMessage = <any>error
            );
    }

}
