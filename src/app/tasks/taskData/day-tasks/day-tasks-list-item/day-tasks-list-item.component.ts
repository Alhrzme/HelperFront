import {Component, OnInit, Input} from '@angular/core';
import {Task} from "../../shared/models/task.model";

@Component({
    selector: 'app-day-tasks-list-item',
    templateUrl: './day-tasks-list-item.component.html',
    styleUrls: ['./day-tasks-list-item.component.css']
})
export class DayTasksListItemComponent implements OnInit {

    @Input() task: Task;

    constructor() {
    }

    ngOnInit() {
    }

}
