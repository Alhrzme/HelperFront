import { NgModule }      from '@angular/core';
import {RouterModule} from "@angular/router";

import {ScheduleComponent} from "./schedule.component";
import {DayScheduleComponent} from "./day-schedule/day-schedule.component";
import {CalendarComponent} from "./calendar/calendar.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'schedule',
                component: ScheduleComponent,
                children: [
                    {
                        path: ':date',
                        component: DayScheduleComponent,
                    },
                    {
                        path: 'calendar',
                        component: CalendarComponent
                    },
                    {
                        path: '',
                        component: DayScheduleComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ScheduleRoutingModule { }
