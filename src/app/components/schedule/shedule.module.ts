import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {ScheduleRoutingModule} from "./shedule-routing.module";
import {DayScheduleComponent} from "./day-schedule/day-schedule.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ScheduleComponent} from "./schedule.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ScheduleRoutingModule,
    ],
    declarations: [
        DayScheduleComponent,
        CalendarComponent,
        ScheduleComponent
    ],
    providers: [

    ]
})
export class ScheduleModule {}
