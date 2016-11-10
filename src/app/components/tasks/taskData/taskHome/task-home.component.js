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
const modal_model_1 = require("../../../shared/common/modal.model");
let TaskHomeComponent = class TaskHomeComponent {
    constructor(taskService) {
        this.taskService = taskService;
        this.title = 'Задачи';
        this.tasks = [];
        this.modal = new modal_model_1.Modal('Удалить?', 'remove', 'ТОЧНО УДАЛИТЬ????');
    }
    ngOnInit() {
        this.taskService.getTasks()
            .subscribe(tasks => {
            this.tasks = tasks;
            this.removeDinnerActiveClass();
        }, error => this.errorMessage = error);
    }
    removeDinnerActiveClass() {
        document.getElementById('loadDimmer').classList.remove('active');
    }
    addDinnerActiveClass() {
        document.getElementById('loadDimmer').classList.add('active');
    }
    onTaskCreated(task) {
        this.addDinnerActiveClass();
        document.getElementById('addButton').textContent = 'Добавляется';
        this.taskService.addTask(task)
            .subscribe((task) => {
            this.tasks.push(task);
            this.removeDinnerActiveClass();
            document.getElementById('addButton').textContent = 'Добавить';
        }, error => this.errorMessage = error);
    }
    onTaskDeleted(task) {
        this.addDinnerActiveClass();
        this.taskService.deleteTask(task)
            .subscribe(task => {
            this.deleteTask(task);
            this.removeDinnerActiveClass();
        }, error => this.errorMessage = error);
    }
    deleteTask(task) {
        let index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
};
TaskHomeComponent = __decorate([
    core_1.Component({
        selector: 'tasks-home',
        templateUrl: './app/components/tasks/taskData/taskHome/task-home.component.html',
        styleUrls: ['./app/components/tasks/taskData/taskHome/task-home.component.css'],
        providers: [tasks_service_1.TaskService]
    }), 
    __metadata('design:paramtypes', [tasks_service_1.TaskService])
], TaskHomeComponent);
exports.TaskHomeComponent = TaskHomeComponent;
//# sourceMappingURL=task-home.component.js.map