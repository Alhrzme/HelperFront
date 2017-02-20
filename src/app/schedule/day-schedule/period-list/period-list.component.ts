import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Period} from "../../period.model";
import {PeriodService} from "../../period.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'period-list',
    templateUrl: 'period-list.component.html',
    styleUrls: ['period-list.component.css']
})
export class PeriodListComponent implements OnInit {

    @Input() periods: Period[] = [];
    @Output() removed: EventEmitter<Period> = new EventEmitter<Period>();
    @Output() changed: EventEmitter<Period> = new EventEmitter<Period>();
    date: string;
    editablePeriodId: number;

    constructor(private periodService: PeriodService,
                private route: ActivatedRoute,) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.date = params['date'];
        });
    }

    onPeriodRemoved(period: Period) {
        this.removed.emit(period);
    }

    onPeriodChanged(period: Period) {
        this.editablePeriodId = null;
        this.changed.emit(period)
    }
}
