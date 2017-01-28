import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Period} from "../../period.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'period-form',
  templateUrl: './period-form.component.html',
  styleUrls: ['./period-form.component.css']
})
export class PeriodFormComponent implements OnInit {

  @Output() created : EventEmitter<Period>;
  date : string;

  constructor(private route : ActivatedRoute) {
    this.created = new EventEmitter<Period>();
  }

  create(duration:string, description:string) {
    if (duration && description) {
      let schedule = new Period(this.getDurationInMinutes(duration), description);
      this.created.emit(schedule);
    }
  }

  private getDurationInMinutes(timeString : string) {
    let timeArray = timeString.split(":");
    return +(timeArray[0]) * 60 + +timeArray[1];
  }

  public onHideButtonClick() {

  }

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      this.date = params['date'];
    });
  }
}
