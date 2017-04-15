import {Component, Input, OnInit} from '@angular/core';
import {FoodSchedule} from "../../shared/food-schedule";
import {DaysOfWeek} from "../../../shared/common/DaysOfWeek";
import * as moment from "moment";

@Component({
    selector: 'app-food-schedule-form',
    templateUrl: './food-schedule-form.component.html',
    styleUrls: ['./food-schedule-form.component.css']
})
export class FoodScheduleFormComponent implements OnInit {

    @Input() schedule: FoodSchedule;
    weekFrequencyData = DaysOfWeek.getWeekFrequencyData();
    daysOfWeek = DaysOfWeek.getDaysOfWeek();

    constructor() {
    }

    ngOnInit() {
        this.setDefaultValues();
    }

    setDefaultValues() {
        if (!this.schedule) {
            this.schedule = new FoodSchedule();
        }
        this.schedule.begin = moment().format('YYYY-MM-DD');
        this.schedule.end = moment().add(1, 'month').format('YYYY-MM-DD');
        this.schedule.weekFrequency = 1;
    }

    onSubmit() {
        console.log(this.schedule);
    }
}
