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
const http_1 = require('@angular/http');
const Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        this.tasks = [];
        this.apiUrl = 'http://helper:8886/app_dev.php/api/v1/tasks';
    }
    getTasks() {
        return this.http.get(this.apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getTask(id) {
        return this.http.get(this.apiUrl + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }
    extractData(res) {
        return res.json();
    }
    addTask(task) {
        return this.post(task);
    }
    deleteTask(task) {
        return this.delete(task);
    }
    post(task) {
        let body = JSON.stringify(task);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers });
        return this.http.post(this.apiUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    delete(task) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers });
        let url = `${this.apiUrl}/${task.id}`;
        return this.http.delete(url, options)
            .map(res => task)
            .catch(this.handleError);
    }
    handleError(error) {
        console.log('Произошла ошибка', error);
        return Observable_1.Observable.throw(error.message || error);
    }
};
TaskService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=tasks.service.js.map