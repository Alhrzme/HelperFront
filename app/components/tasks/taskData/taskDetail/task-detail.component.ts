import {Component, OnInit, Input} from '@angular/core';
import {Task} from "../../../shared/tasks/task.model";
import { TaskService } from "../../../shared/tasks/tasks.service";
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
	selector: 'task-detail',
	templateUrl: './app/components/tasks/taskData/taskDetail/task-detail.component.html',
	styleUrls: ['./app/components/tasks/taskData/taskDetail/task-detail.component.css'],
    providers: [TaskService]
})

export class TaskDetailComponent implements OnInit {

	title: string = 'Задача';
	task: Task;
	taskService : TaskService;

    constructor(
        private route:ActivatedRoute,
        private taskService:TaskService,
        private router:Router) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.taskService.getTask(id)
                .subscribe(task => this.task = task);
        });
    }
}