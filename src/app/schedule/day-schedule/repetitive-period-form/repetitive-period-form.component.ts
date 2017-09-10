import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {RepetitivePeriod} from "../../repetitive-period.model";

@Component({
    selector: 'app-repetitive-period-form',
    templateUrl: './repetitive-period-form.component.html',
    styleUrls: ['./repetitive-period-form.component.css']
})
export class RepetitivePeriodFormComponent implements OnInit {

    @Output() created: EventEmitter<RepetitivePeriod>;
    @Input() period: RepetitivePeriod = new RepetitivePeriod();

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {

    }

}
