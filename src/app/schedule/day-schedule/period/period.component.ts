import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Period} from "../../period.model";

@Component({
    selector: 'period',
    templateUrl: 'period.component.html',
    styleUrls: ['period.component.css']
})
export class PeriodComponent implements OnInit {

    @Input() period: Period;
    @Output() removed: EventEmitter<Period> = new EventEmitter<Period>();
    @Output() changed: EventEmitter<Period> =  new EventEmitter<Period>();
    isEdited:boolean = false;

    ngOnInit() {
    }

    public editButton(period: Period) {
        this.isEdited = true;
    }

    public removeButton(period: Period) {
        this.removed.emit(period);
    }

    public onPeriodChanged() {
        this.isEdited = false;
        this.changed.emit(this.period);
    }
}
