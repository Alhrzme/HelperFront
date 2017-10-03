import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import * as moment from 'moment';
import {TimeHelper} from "../shared/services/time-helper.service";

@Component({
    selector: 'app-schedule',
    templateUrl: 'schedule.component.html',
    styleUrls: ['schedule.component.css']
})
export class ScheduleComponent implements OnInit {

    title: string = 'Расписание';
    date: string;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    onChange(val) {
        this.date = moment(val).format('YYYY-MM-DD');
        let dateMoment = moment(this.date, 'YYYY-MM-DD');
        if (dateMoment.isSame(moment().startOf('day'))) {
            this.router.navigate(['/schedule']);
        } else {
            this.router.navigate(['/schedule', dateMoment.format('DDMMYYYY')]);
        }
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (!this.date) {
                if (params['date']) {
                    this.date = params['date'];
                } else {
                    this.date = moment().format('YYYY-MM-DD');
                }
            }
        });
    }

    getTitle() {
        const currentDate = TimeHelper.getDate(this.date, TimeHelper.INPUT_DATE_FORMAT);
        const format = currentDate.year() === moment().year() ? "DD MMMM" : "DD MMMM YYYY года";

        return currentDate.format(format);
    }
}
