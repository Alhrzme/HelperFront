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
const router_1 = require("@angular/router");
const tasks_component_1 = require("./tasks.component");
const task_data_component_1 = require("./taskData/task-data.component");
const task_detail_component_1 = require("./taskData/taskDetail/task-detail.component");
const task_home_component_1 = require("./taskData/taskHome/task-home.component");
let TasksRoutingModule = class TasksRoutingModule {
};
TasksRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                {
                    path: 'tasks',
                    component: tasks_component_1.TasksComponent,
                    children: [
                        {
                            path: '',
                            component: task_data_component_1.TaskDataComponent,
                            children: [
                                {
                                    path: ':id',
                                    component: task_detail_component_1.TaskDetailComponent
                                },
                                {
                                    path: '',
                                    component: task_home_component_1.TaskHomeComponent
                                }
                            ]
                        }
                    ]
                }
            ])
        ],
        exports: [
            router_1.RouterModule
        ]
    }), 
    __metadata('design:paramtypes', [])
], TasksRoutingModule);
exports.TasksRoutingModule = TasksRoutingModule;
//# sourceMappingURL=tasks-routing.module.js.map