import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { TasksComponent } from './components/tasks/tasks.component'
import {AppRoutingModule} from "./app-routing.module";
import {TaskListComponent} from "./components/tasks/taskData/taskHome/task-list/task-list.component";
import {TaskFormComponent} from "./components/tasks/taskData/taskHome/task-form/task-form.component";
import {TaskListItemComponent} from "./components/tasks/taskData/taskHome/task-list-item/task-list-item.component";
import {TaskTreeComponent} from "./components/tasks/taskData/taskDetail/task-tree/task-tree.component";
import {ModalComponent} from "./components/shared/common/modal.component";

@NgModule({
    imports:      [ BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule,
    ],
    declarations: [ AppComponent, TaskListComponent, TaskFormComponent,
        TaskListItemComponent, TaskTreeComponent, TasksComponent, ModalComponent ],
    bootstrap:    [ AppComponent ],

})
export class AppModule { }
