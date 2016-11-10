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
let TaskFormComponent = class TaskFormComponent {
    constructor() {
        this.created = new core_1.EventEmitter();
    }
    create(title) {
        if (title) {
            let task = new task_model_1.Task(title, title);
            this.created.emit(task);
        }
        else {
            $('input')
                .transition('flash');
        }
    }
    ngOnInit() { }
};
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], TaskFormComponent.prototype, "created", void 0);
TaskFormComponent = __decorate([
    core_1.Component({
        selector: 'task-form',
        templateUrl: './app/components/tasks/taskData/taskHome/task-form/task-form.component.html'
    }), 
    __metadata('design:paramtypes', [])
], TaskFormComponent);
exports.TaskFormComponent = TaskFormComponent;
//# sourceMappingURL=task-form.component.js.map