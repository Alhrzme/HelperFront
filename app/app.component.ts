import { Component } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component'

@Component({
    selector: 'tasks-app',
    templateUrl: './app/app.component.html'
    directives: [TasksComponent]
})

export class AppComponent {
    title: string;
    tasks: string[];
    constructor() {
        this.title = 'lomai';
        this.tasks = ['Закупиться в магазине', 'поспать']
    }

    someFunction() {
        console.log('Добавляем задачу');
    }

}
