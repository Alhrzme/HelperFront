import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Period} from "../../period.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'period-form',
    templateUrl: 'period-form.component.html',
    styleUrls: ['period-form.component.css']
})
export class PeriodFormComponent implements OnInit {

    @Output() created: EventEmitter<Period>;
    date: string;

    constructor(private route: ActivatedRoute) {
        this.created = new EventEmitter<Period>();
    }

    create(begin: string, end: string, description: string) {
        if (begin && end && description) {
            let schedule = new Period(begin, end, description);
            this.created.emit(schedule);
        }
    }

    public onHideButtonClick() {

    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.date = params['date'];
        });
    }
}
