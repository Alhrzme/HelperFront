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
let TaskListItemComponent = class TaskListItemComponent {
    constructor() {
        this.deleted = new core_1.EventEmitter();
    }
    ngOnInit() {
    }
    deleteTask() {
        var thisComponent = this;
        $('.ui.basic.modal')
            .modal('show')
            .modal({
            onDeny: function () {
            },
            onApprove: function () {
                thisComponent.deleted.emit(thisComponent.task);
            }
        });
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', task_model_1.Task)
], TaskListItemComponent.prototype, "task", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], TaskListItemComponent.prototype, "deleted", void 0);
TaskListItemComponent = __decorate([
    core_1.Component({
        selector: 'task-list-item',
        templateUrl: './app/components/tasks/taskData/taskHome/task-list-item/task-list-item.component.html',
        styleUrls: ['./app/components/tasks/taskData/taskHome/task-list-item/task-list-item.component.css'],
        directives: []
    }), 
    __metadata('design:paramtypes', [])
], TaskListItemComponent);
exports.TaskListItemComponent = TaskListItemComponent;
//# sourceMappingURL=task-list-item.component.js.map