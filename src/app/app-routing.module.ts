import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import {TaskHomeComponent} from "./components/tasks/taskData/taskHome/task-home.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {DayScheduleComponent} from "./components/schedule/day-schedule/day-schedule.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
