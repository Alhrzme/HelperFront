import {Component, OnInit} from '@angular/core';
import {CookieService} from "angular2-cookie/core";
import {Router} from "@angular/router";


@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
        // document.getElementsByTagName('body').style.
    }
    menuItems = [
        {'text': 'Задачи', 'url': '/tasks'},
        {'text': 'Расписание', 'url': '/schedule'},
        {'text': 'Ну, и еще одно', 'url': '/tasks/'}
    ];

    constructor(private cookieService: CookieService, private router: Router) {
    }

    isAuthorized() {
        return !!this.cookieService.get('login-token');
    }

    onEscape() {
        this.cookieService.remove('login-token');
        this.router.navigate(['/']);
    }
}