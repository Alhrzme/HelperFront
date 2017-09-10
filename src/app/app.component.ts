import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login/login.service";
import {PushNotificationsService} from "angular2-notifications/dist";
import {TimeHelper} from "./shared/services/time-helper.service";
import {TaskEntriesService} from "./tasks/taskData/shared/services/task-entries.service";

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
    pendingTasks = [];

    ngOnInit(): void {
        this._push.requestPermission();
        this.checkTasks();
    }

    constructor(private loginService: LoginService, private router: Router, private tasksService: TaskEntriesService, private _push: PushNotificationsService) {
    }

    private checkTasks() {

        setTimeout(() => {
            this.checkTasks()
        }, 10000);
        if (this.isAuthorized()) {
            this.tasksService.getSavedEntities('date=' + TimeHelper.getCurrentDateString()).subscribe(
                tasks => {
                    let currentTime = TimeHelper.getCurrentTime();
                    if (currentTime.isSameOrAfter(TimeHelper.getDate('23:00', TimeHelper.TIME_FORMAT))) {
                        this._push.create('СПАТЬ ИДИ!!!', {body: 'ПОРА СПАТЬ!'}).subscribe(
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
                        let difference = taskEndTime.diff(currentTime, 'minutes');
                        if (this.pendingTasks[task.id] || currentTime.isBefore(this.pendingTasks[task.id])) {
                            continue;
                        }

                        if (difference < 30) {
                            this._push.create('ВЫПОЛНИ ЗАДАЧУ, ЛЕНТЯЙ(КА)', {body: 'Задача ' + task.task.title + ' не выполнена, времени в обрез!'}).subscribe(
                                res => {
                                    event.preventDefault(); // prevent the browser from focusing the Notification's tab
                                    // window.open('http://localhost:4200');
                                    // this.pendingTasks[task.id] = currentTime.add(5, 'minutes');
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