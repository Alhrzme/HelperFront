import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Schedule} from "../../../shared/schedule/schedule.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'schedule-form',
    templateUrl: './schedule-form.component.html',
    styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {

    @Output() created:EventEmitter<Schedule>;
    date : string;

    constructor(private route:ActivatedRoute) {
        this.created = new EventEmitter<Schedule>();
    }

    create(startTime:string, description:string) {
        if (startTime && description) {
            let schedule = new Schedule(startTime, this.date, description);
            this.created.emit(schedule);
        }
    }

    ngOnInit() {
        this.route.params.forEach((params:Params) => {
            this.date = params['date'];
        });
    }

}
