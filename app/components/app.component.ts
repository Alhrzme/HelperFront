import { Component } from '@angular/core';


@Component({
    selector: 'tasks-app',
    templateUrl: './app/components/app.component.html',
})

export class AppComponent {
    title: string;
    constructor() {
        this.title = 'lomai';
    }
}
