import {Component, OnInit, Input} from '@angular/core';
import {TaskService} from "../../shared/services/tasks.service";
import {Params, ActivatedRoute} from "@angular/router";
import {AbstractTask} from "../../shared/models/abstract-task.model";

@Component({
    selector: 'app-day-tasks-list',
    templateUrl: './day-tasks-list.component.html',
    styleUrls: ['./day-tasks-list.component.css']
})
export class DayTasksListComponent implements OnInit {

    @Input() tasks: AbstractTask[] = [];
    date: string;

    constructor(private taskService: TaskService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.date = params['date'];
        });
        this.taskService.getTasks(this.date)
            .subscribe(
                tasks => this.tasks = tasks,
                error => console.log(error)
            );
    }

}
