import {Component, OnInit, Input} from '@angular/core';
import {Period} from "../../period.model";
import {PeriodService} from "../../period.service";
import {ActivatedRoute, Params} from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'period-list',
  templateUrl: 'period-list.component.html',
  styleUrls: ['period-list.component.css']
})
export class PeriodListComponent implements OnInit {

  @Input() periods : Period[] = [];
  errorMessage : string = '';
  date : string;

  constructor(private periodService:PeriodService,
              private route:ActivatedRoute,) { }

  get sortedPeriods() {
    if (this.periods) {
      return this.periods.sort(function (p1, p2) {
        return moment(p1.begin, "LT").isAfter(moment(p2, "LT")) ? -1 : 1;
      })
    } else {
      return [];
    }
  }

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      this.date = params['date'];
    });
  }


  onPeriodRemoved(period : Period) : void {
    this.periodService.deletePeriod(period)
        .subscribe(
            period => this.periods.splice(this.periods.indexOf(period), 1),
            error => this.errorMessage = <any>error
        )
  }
}
