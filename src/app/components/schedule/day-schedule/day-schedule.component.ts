import { Component, OnInit } from '@angular/core';
import {Schedule} from "../../shared/schedule/schedule.model";
import {ScheduleService} from "../../shared/schedule/schedule.service";

@Component({
  selector: 'day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.css']
})
export class DayScheduleComponent implements OnInit {

  schedule : Schedule;
  errorMessage : string = '';

  constructor(private scheduleService : ScheduleService) { }

  onScheduleCreated(schedule:Schedule) :void {
    this.scheduleService.postSchedule(schedule)
        .subscribe(
            schedule => this.schedule = schedule,
            error => this.errorMessage = <any>error
        );
  }

  ngOnInit() {

  }

}
