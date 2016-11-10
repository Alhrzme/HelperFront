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
const common_1 = require('@angular/common');
const forms_1 = require('@angular/forms');
const task_data_component_1 = require('./taskData/task-data.component');
const task_list_component_1 = require('./taskData/taskHome/task-list/task-list.component');
const task_form_component_1 = require('./taskData/taskHome/task-form/task-form.component');
const task_list_item_component_1 = require('./taskData/taskHome/task-list-item/task-list-item.component');
const task_tree_component_1 = require('./taskData/taskDetail/task-tree/task-tree.component');
const task_detail_component_1 = require('./taskData/taskDetail/task-detail.component');
const tasks_service_1 = require("../shared/tasks/tasks.service");
const tasks_routing_module_1 = require('./tasks-routing.module');
const tasks_component_1 = require("./tasks.component");
const task_home_component_1 = require("./taskData/taskHome/task-home.component");
const modal_component_1 = require("../shared/common/modal.component");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            tasks_routing_module_1.TasksRoutingModule,
        ],
        declarations: [
            task_data_component_1.TaskDataComponent,
            task_list_component_1.TaskListComponent,
            task_form_component_1.TaskFormComponent,
            task_list_item_component_1.TaskListItemComponent,
            task_tree_component_1.TaskTreeComponent,
            task_detail_component_1.TaskDetailComponent,
            tasks_component_1.TasksComponent,
            task_home_component_1.TaskHomeComponent,
            modal_component_1.ModalComponent
        ],
        providers: [
            tasks_service_1.TaskService
        ]
    }), 
    __metadata('design:paramtypes', [])
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map