import {Component, OnInit} from '@angular/core';
import {CookieService} from "angular2-cookie/core";
import {Router} from "@angular/router";


@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
    height: number;
    ngOnInit(): void {
    }
    menuItems = [
        {'text': 'Задачи', 'url': '/tasks'},
        {'text': 'Расписание', 'url': '/schedule'},
        {'text': 'Ну, и еще одно', 'url': '/tasks/'}
    ];

    constructor(private cookieService: CookieService, private router: Router) {
        //todo: я хз откуда эти 145 берутся %)
        this.height = window.screen.height - 145;
    }

    isAuthorized() {
        return !!this.cookieService.get('login-token');
    }

    onEscape() {
        this.cookieService.remove('login-token');
        this.router.navigate(['/']);
    }
}