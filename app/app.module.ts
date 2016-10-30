import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { TaskListComponent } from  './components/tasks/task-list/task-list.component'
import { TaskFormComponent } from  './components/tasks/task-form/task-form.component'
import { TasksComponent} from './components/tasks/tasks.component'
import {TaskItemComponent} from "./components/tasks/task-item/task-item.component";



@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
    declarations: [ AppComponent, TaskListComponent, TaskFormComponent, TasksComponent, TaskItemComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
