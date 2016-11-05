import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app/components/app.component.html',
    styleUrls: ['./app/components/app.component.css']
})

export class AppComponent {
    menuItems = [
        {'text' : 'Задачи', 'url' : '/tasks' },
        {'text' : 'Расписание', 'url' : '/tasks' },
        { 'text' : 'Ну, и еще одно', 'url' : '/tasks/' }
        ];

    constructor() {
    }
}
