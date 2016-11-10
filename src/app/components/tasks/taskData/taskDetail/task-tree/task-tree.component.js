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
const task_model_1 = require("../../../../shared/tasks/task.model");
let TaskTreeComponent = class TaskTreeComponent {
    ngOnInit() { }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', task_model_1.Task)
], TaskTreeComponent.prototype, "task", void 0);
TaskTreeComponent = __decorate([
    core_1.Component({
        selector: 'task-tree',
        templateUrl: './app/components/tasks/taskData/taskDetail/task-tree/task-tree.component.html',
        styleUrls: ['./app/components/tasks/taskData/taskDetail/task-tree/task-tree.component.css']
    }), 
    __metadata('design:paramtypes', [])
], TaskTreeComponent);
exports.TaskTreeComponent = TaskTreeComponent;
//# sourceMappingURL=task-tree.component.js.map