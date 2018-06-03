import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login/login.service";
import {NotificationsService} from "angular2-notifications";
import {TimeHelper} from "./shared/services/time-helper.service";
import {TaskEntriesService} from "./tasks/taskData/shared/services/task-entries.service";
import {isDevMode} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
    pendingTasks = [];

    ngOnInit(): void {
        if (!isDevMode()) {
            this.checkTasks();
        }
        moment.locale('ru');
    }

    options = {
        pauseOnHover: true,
        timeOut: 10000
    };

    constructor(private loginService: LoginService,
                private router: Router,
                private tasksService: TaskEntriesService,
                private _push: NotificationsService) {
    }

    private checkTasks() {
        setTimeout(() => {
            this.checkTasks()
        }, 60000);
        if (this.isAuthorized()) {
            this.tasksService.getSavedEntities('date=' + TimeHelper.getCurrentDateString()).subscribe(
                tasks => {
                    let currentTime = TimeHelper.getCurrentTime();
                    if (currentTime.isSameOrAfter(TimeHelper.getDate('23:00', TimeHelper.TIME_FORMAT))) {
                        this._push.create('СПАТЬ ИДИ!!!', {body: 'ПОРА СПАТЬ!'}).click.subscribe(
                            res => {
                                event.preventDefault(); // prevent the browser from focusing the Notification's tab
                                console.log(res);
                            },
                            err => console.log(err)
                        )
                    }
                    for (let task of tasks) {
                        let endTimeString = task.task.endTime === '' ? '23:00' : task.task.endTime;
                        let taskEndTime = TimeHelper.getDate(endTimeString, TimeHelper.TIME_FORMAT);
                        let difference = Math.abs(taskEndTime.diff(currentTime, 'minutes'));
                        if (this.pendingTasks[task.id] && currentTime.isBefore(this.pendingTasks[task.id])) {
                            continue;
                        }

                        if (difference < 30) {
                            this._push.create('ВЫПОЛНИ ЗАДАЧУ, ЛЕНТЯЙ(КА)', {body: 'Задача ' + task.task.title + ' не выполнена, времени в обрез!'}).click.subscribe(
                                notification => {
                                    event.preventDefault(); // prevent the browser from focusing the Notification's tab
                                    // window.open('http://localhost:4200');
                                    this.pendingTasks[task.id] = TimeHelper.getCurrentTime().add(4, 'minutes');
                                },
                                err => console.log(err)
                            )
                        }
                    }
                },
                error => console.log(error)
            );
        }
    }

    isAuthorized() {
        return this.loginService.isAuthorized();
    }

    onEscape() {
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}