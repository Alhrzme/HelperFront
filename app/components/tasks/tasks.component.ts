import { Component } from '@angular/core';

@Component({
    selector: 'tasks',
    templateUrl: './app/components/tasks/tasks.component.html',
})

export class TasksComponent {
    title: string;
    constructor() {
        this.title = 'lomai';
    }
}
