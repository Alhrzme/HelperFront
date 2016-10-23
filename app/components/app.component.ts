import { Component } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';

@Component({
    selector: 'tasks-app',
    templateUrl: './app/components/app.component.html',
    directives: [TasksComponent]
})

export class AppComponent {
    title: string;
    constructor() {
        this.title = 'lomai';
    }

}
