import {Component, OnInit} from '@angular/core';
import {Schedule} from "../../shared/schedule/schedule.model";
import {ScheduleService} from "../../shared/schedule/schedule.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Period} from "../../shared/schedule/period.model";
import {PeriodService} from "../../shared/schedule/period.service";

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
