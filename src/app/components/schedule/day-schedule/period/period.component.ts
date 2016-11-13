import {Component, OnInit, Input} from '@angular/core';
import {Period} from "../../../shared/schedule/period.model";

@Component({
  selector: 'period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {

  @Input() period : Period;

  constructor() { }

  ngOnInit() {
  }

}
