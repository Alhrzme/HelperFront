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
const tasks_service_1 = require("../../../../shared/tasks/tasks.service");
let TaskListComponent = class TaskListComponent {
    constructor() {
        this.deleted = new core_1.EventEmitter();
    }
    ngOnInit() {
    }
    get sortedTasks() {
        return this.tasks
            .map(task => task)
            .sort((a, b) => {
            if (a.title > b.title)
                return 1;
            else if (a.title < b.title)
                return -1;
            else
                return 0;
        });
    }
    onTaskDeleted(task) {
        this.deleted.emit(task);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], TaskListComponent.prototype, "tasks", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], TaskListComponent.prototype, "deleted", void 0);
TaskListComponent = __decorate([
    core_1.Component({
        selector: 'task-list',
        templateUrl: './app/components/tasks/taskData/taskHome/task-list/task-list.component.html',
        styleUrls: ['./app/components/tasks/taskData/taskHome/task-list/task-list.component.css'],
        providers: [tasks_service_1.TaskService]
    }), 
    __metadata('design:paramtypes', [])
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map