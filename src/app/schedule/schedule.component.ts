import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as moment from 'moment';

@Component({
    selector: 'app-schedule',
    templateUrl: 'schedule.component.html',
    styleUrls: ['schedule.component.css']
})
export class ScheduleComponent implements OnInit {

    title: string = 'Расписание';
    date:string;

    constructor(private router: Router) {
    }

    onChange() {
        let dateMoment = moment(this.date, 'YYYY-MM-DD');
        if (dateMoment.isSame(moment().startOf('day'))) {
            this.router.navigate(['/schedule']);
        } else {
            this.router.navigate(['/schedule', dateMoment.format('DDMMYYYY')]);
        }
    }

    ngOnInit() {
        if (!this.date) {
            this.date = moment().format('YYYY-MM-DD');
        }
    }
}
