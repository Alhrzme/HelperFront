import {Component, OnInit, Input} from '@angular/core';
import {Period} from "../../../shared/schedule/period.model";

@Component({
  selector: 'period-list',
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.css']
})
export class PeriodListComponent implements OnInit {

  @Input() periods : Period[] = [];

  constructor() { }

  ngOnInit() {
  }

}
