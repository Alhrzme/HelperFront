import { Component } from '@angular/core';

@Component({
    selector: 'tasks',
    templateUrl: 'tasks.component.html',
})

export class TasksComponent {
    title: string;
    constructor() {
        this.title = 'lomai';
    }
}
