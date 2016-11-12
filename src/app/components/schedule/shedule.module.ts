import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {ScheduleRoutingModule} from "./shedule-routing.module";
import {DayScheduleComponent} from "./day-schedule/day-schedule.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ScheduleComponent} from "./schedule.component";
import { PeriodComponent } from './day-schedule/period/period.component';
import { ScheduleFormComponent } from './day-schedule/schedule-form/schedule-form.component';
import { PeriodListComponent } from './day-schedule/period-list/period-list.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ScheduleRoutingModule,
    ],
    declarations: [
        DayScheduleComponent,
        CalendarComponent,
        ScheduleComponent,
        PeriodComponent,
        ScheduleFormComponent,
        PeriodListComponent,
    ],
    providers: [

    ]
})
export class ScheduleModule {}
