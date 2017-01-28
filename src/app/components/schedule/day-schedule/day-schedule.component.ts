import {Component, OnInit} from '@angular/core';
import {Schedule} from "../schedule.model";
import {ScheduleService} from "../schedule.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Period} from "../period.model";
import {PeriodService} from "../period.service";

@Component({
    selector: 'day-schedule',
    templateUrl: './day-schedule.component.html',
    styleUrls: ['./day-schedule.component.css']
})
export class DayScheduleComponent implements OnInit {

    schedule:Schedule;
    errorMessage:string = '';
    date:string;

    constructor(
        private scheduleService:ScheduleService,
        private route:ActivatedRoute,
        private periodService:PeriodService
    ) {
    }

    onScheduleCreated(schedule:Schedule):void {
        this.scheduleService.postSchedule(schedule)
            .subscribe(
                schedule => this.schedule = schedule,
                error => this.errorMessage = <any>error
            );
    }

    onPeriodCreated(period : Period) : void {
        this.periodService.postPeriod(period, this.date)
            .subscribe(
                period => this.schedule.periods.push(period),
                error => this.errorMessage = <any>error
            );
    }

    onPeriodRemoved(period : Period) : void {
        this.periodService.deletePeriod(this.date, period)
            .subscribe(
                period => this.schedule.periods.splice(this.schedule.periods.indexOf(period), 1),
                error => this.errorMessage = <any>error
            )
    }

    ngOnInit() {
        this.route.params.forEach((params:Params) => {
            this.date = params['date'];
        });
        this.scheduleService.getSchedule(this.date)
            .subscribe(
                schedule => this.schedule = schedule,
                error => this.errorMessage = <any>error
            );
    }

}
