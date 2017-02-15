import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Period} from "../../period.model";

@Component({
    selector: 'period',
    templateUrl: 'period.component.html',
    styleUrls: ['period.component.css']
})
export class PeriodComponent implements OnInit {

    @Input() period: Period;
    @Output() removed: EventEmitter<Period>;

    constructor() {
        this.removed = new EventEmitter<Period>();
    }

    ngOnInit() {
    }

    public editButton(period: Period) {

    }

    public removeButton(period: Period) {
        this.removed.emit(period);
    }

}
