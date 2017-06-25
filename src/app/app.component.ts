import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login/login.service";
import {NotificationsService, PushNotificationsService} from "angular2-notifications/dist";

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
        this._push.requestPermission();
        this._push.create('Test', {body: 'something'}).subscribe(
            res => console.log(res),
            err => console.log(err)
        )
    }

    options = {
        position: ["bottom", "right"]
    };

    menuItems = [
        {'text': 'Задачи', 'url': '/taskEntries'},
        {'text': 'Расписание', 'url': '/schedule'},
        {'text': 'Ну, и еще одно', 'url': '/taskEntries/'}
    ];

    constructor(private loginService: LoginService, private router: Router, private notificationsService: NotificationsService, private _push: PushNotificationsService) {

    }

    isAuthorized() {
        return this.loginService.isAuthorized();
    }

    onEscape() {
        this.loginService.logout();
        this.router.navigate(['']);
    }
}