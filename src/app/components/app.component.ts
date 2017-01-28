import {Component} from '@angular/core';
import * as moment from 'moment';


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    menuItems = [
        {'text' : 'Задачи', 'url' : '/tasks' },
        {'text' : 'Расписание', 'url' : '/schedule' },
        { 'text' : 'Ну, и еще одно', 'url' : '/tasks/' }
        ];

    constructor() {
    }
}