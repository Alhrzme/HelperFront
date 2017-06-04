import {Component, OnInit} from '@angular/core';
import {CookieService} from "angular2-cookie/core";
import {Router} from "@angular/router";
import {LoginService} from "./login/login.service";


@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
    }
    menuItems = [
        {'text': 'Задачи', 'url': '/taskEntries'},
        {'text': 'Расписание', 'url': '/schedule'},
        {'text': 'Ну, и еще одно', 'url': '/taskEntries/'}
    ];

    constructor(private loginService: LoginService, private router: Router) {
    }

    isAuthorized() {
        return this.loginService.isAuthorized();
    }

    onEscape() {
        this.loginService.logout();
        this.router.navigate(['']);
    }
}