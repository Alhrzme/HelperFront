import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Period} from "../period.model";
import {PeriodService} from "../period.service";
import {TimeHelperService} from "../../shared/services/time-helper.service";
import {TaskService} from "../../tasks/taskData/shared/services/tasks.service";
import {AbstractTask} from "../../tasks/taskData/shared/models/abstract-task.model";
import {Task} from "../../tasks/taskData/shared/models/task.model";
import * as moment from 'moment';

@Component({
    selector: 'day-schedule',
    templateUrl: 'day-schedule.component.html',
    styleUrls: ['day-schedule.component.css']
})
export class DayScheduleComponent implements OnInit {

    periods: Period[];
    tasks: AbstractTask[] = [];
    errorMessage: string = '';
    date: string;

    constructor(private route: ActivatedRoute,
                private periodService: PeriodService,
                private taskService: TaskService) {
    }

    onPeriodCreated(period: Period): void {
        this.periodService.postPeriod(period, this.date)
            .subscribe(
                period => {
                    this.periods = this.periods.concat([period]);
                    this.periods = TimeHelperService.sortPeriods(this.periods)
                },
                error => this.errorMessage = <any>error
            );
    }

    ngOnInit() {
        console.log('init');
        this.route.params.forEach((params: Params) => {
            this.date = params['date'] ? params['date'] : moment().format('DDMMYYYY');
            this.taskService.getTasks(this.date)
                .subscribe(
                    tasks => this.tasks = tasks,
                    error => console.log(error)
                );
            this.periodService.getPeriods(this.date)
                .subscribe(
                    periods => {
                        this.periods = TimeHelperService.sortPeriods(periods);
                    },
                    error => this.errorMessage = <any>error
                );
        });
    }

    onPeriodRemoved(period: Period): void {
        let periodIndex = this.periods.indexOf(period);
        this.periodService.deletePeriod(period)
            .subscribe(
                periodId => {
                    let periods = [].concat(this.periods);
                    periods.splice(periodIndex, 1);
                    this.periods = periods;
                },
                error => this.errorMessage = <any>error
            )
    }

    onPeriodChanged(period: Period): void {
        this.periodService.putPeriod(period)
            .subscribe(
                period => {
                    this.periods = this.periods = TimeHelperService.sortPeriods(this.periods);
                },
                error => this.errorMessage = <any>error
            )
    }

    onTaskDeleted(task: Task): void {
        let taskIndex = this.tasks.indexOf(task);
        this.taskService.deleteTask(task)
            .subscribe(
                task => {
                    if (taskIndex > -1) {
                        this.tasks.splice(taskIndex, 1);
                    }
                },
                error => this.errorMessage = <any>error
            );
    }

    onTaskEdited(task: Task): void {
        this.taskService.editTask(task)
            .subscribe(
                task => task,
                error => this.errorMessage = <any>error
            )
    }
}
