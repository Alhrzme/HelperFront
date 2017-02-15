import {Component, OnInit, Input} from '@angular/core';
import {Period} from "../../period.model";
import {PeriodService} from "../../period.service";
import {ActivatedRoute, Params} from "@angular/router";

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
