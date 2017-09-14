import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Period} from "../period.model";
import {PeriodService} from "../period.service";
import {TimeHelper} from "../../shared/services/time-helper.service";
import * as moment from 'moment';
import {TaskEntriesService} from "../../tasks/taskData/shared/services/task-entries.service";
import {TaskEntry} from "../../tasks/taskData/shared/models/task-entry.model";
import {NotificationsService} from "angular2-notifications";
import {TaskService} from "../../tasks/taskData/shared/services/tasks.service";

@Component({
    selector: 'day-schedule',
    templateUrl: 'day-schedule.component.html',
    styleUrls: ['day-schedule.component.css']
})
export class DayScheduleComponent implements OnInit {
    tasksLinesLengths;
    periods: Period[];
    tasks: TaskEntry[] = [];
    errorMessage: string = '';
    date: string;

    constructor(private route: ActivatedRoute,
                private periodService: PeriodService,
                private notification: NotificationsService,
                private tasksService: TaskService,
                private taskEntriesService: TaskEntriesService) {
    }

    onPeriodCreated(period: Period): void {
        this.periodService.postPeriod(period, this.date)
            .subscribe(
                period => {
                    this.periods = this.periods.concat([period]);
                    this.periods = TimeHelper.sortPeriods(this.periods)
                },
                error => this.errorMessage = <any>error
            );
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.date = params['date'] ? params['date'] : moment().format(TimeHelper.DATE_FORMAT);
            this.taskEntriesService.getTaskEntries(this.date)
                .subscribe(
                    tasks => {
                        this.tasks = tasks;
                        this.loadTaskLinesLengths(tasks);
                    },
                    error => console.log(error)
                );
            this.periodService.getPeriods(this.date)
                .subscribe(
                    periods => {
                        this.periods = TimeHelper.sortPeriods(periods);
                    },
                    error => this.errorMessage = <any>error
                );
        });
    }

    private loadTaskLinesLengths(taskEntries: TaskEntry[]) {
        let taskIds = [];
        taskEntries.forEach((taskEntry: TaskEntry) => {
            taskIds.push(taskEntry.task.id);
        });
        this.tasksService.getTaskLinesLengths(taskIds).subscribe(
            lines => this.tasksLinesLengths = lines,
            error => console.log(error)
        );
    }

    onPeriodRemoved(period: Period): void {
        let periodIndex = this.periods.indexOf(period);
        this.periodService.deletePeriod(period)
            .subscribe(
                () => {
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
                () => {
                    this.periods = this.periods = TimeHelper.sortPeriods(this.periods);
                },
                error => this.errorMessage = <any>error
            )
    }

    onTaskDeleted(task: TaskEntry): void {
        let taskIndex = this.tasks.indexOf(task);
        this.taskEntriesService.deleteTaskEntry(task)
            .subscribe(
                () => {
                    if (taskIndex > -1) {
                        this.tasks.splice(taskIndex, 1);
                    }
                },
                error => this.errorMessage = <any>error
            );
    }

    onTaskEdited(task: TaskEntry): void {
        let taskIndex = this.tasks.indexOf(task);
        this.taskEntriesService.editEntry(task)
            .subscribe(
                task => {
                    if ((this.date != task.date || task.isCompleted) && taskIndex > -1) {
                        this.tasks.splice(taskIndex, 1);
                        const successMessage = this.tasks.length > 0
                            ? 'Еще 1 задача выполнена! Вы великолепны!'
                            : 'Все задачи на сегодня выполнены!';

                        this.notification.success('Вы молодец!', successMessage);
                    }
                },
                error => this.errorMessage = <any>error
            )
    }
}
