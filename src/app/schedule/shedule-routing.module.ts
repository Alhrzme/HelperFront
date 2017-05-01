import {NgModule}      from '@angular/core';
import {RouterModule} from "@angular/router";

import {ScheduleComponent} from "./schedule.component";
import {DayScheduleComponent} from "./day-schedule/day-schedule.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {AuthGuardService} from "../shared/guards/auth-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'schedule',
                component: ScheduleComponent,
                canActivate: [AuthGuardService],
                children: [
                    {
                        path: '',
                        canActivateChild: [AuthGuardService],
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
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ScheduleRoutingModule {
}
