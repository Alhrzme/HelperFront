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
                        path: '',
                        component: DayScheduleComponent,
                    },
                    {
                        path: 'calendar',
                        component: CalendarComponent
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
