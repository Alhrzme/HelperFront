import {Component, OnInit, Input} from '@angular/core';
import {TaskService} from "../shared/services/tasks.service";

@Component({
    selector: 'app-day-tasks',
    templateUrl: './day-tasks.component.html',
    styleUrls: ['./day-tasks.component.css']
})
export class DayTasksComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
