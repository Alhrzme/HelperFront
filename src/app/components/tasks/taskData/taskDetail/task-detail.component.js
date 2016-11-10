"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const tasks_service_1 = require("../../../shared/tasks/tasks.service");
const router_1 = require("@angular/router");
let TaskDetailComponent = class TaskDetailComponent {
    constructor(route, taskService, router) {
        this.route = route;
        this.taskService = taskService;
        this.router = router;
        this.title = 'Задача';
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let id = +params['id'];
            this.taskService.getTask(id)
                .subscribe(task => this.task = task);
        });
    }
};
TaskDetailComponent = __decorate([
    core_1.Component({
        selector: 'task-detail',
        templateUrl: './app/components/tasks/taskData/taskDetail/task-detail.component.html',
        styleUrls: ['./app/components/tasks/taskData/taskDetail/task-detail.component.css'],
        providers: [tasks_service_1.TaskService]
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, tasks_service_1.TaskService, router_1.Router])
], TaskDetailComponent);
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=task-detail.component.js.map