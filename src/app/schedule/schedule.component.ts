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

    constructor(private router: Router) {
    }

    onChange(date) {
        let dateMoment = moment(date, 'YYYY-MM-DD');
        if (dateMoment.isSame(moment().startOf('day'))) {
            this.router.navigate(['/schedule']);
        } else {
            this.router.navigate(['/schedule', dateMoment.format('DDMMYYYY')]);
        }
    }

    ngOnInit() {
    }

}
