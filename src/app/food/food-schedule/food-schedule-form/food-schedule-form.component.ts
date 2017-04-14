import {Component, Input, OnInit} from '@angular/core';
import {FoodSchedule} from "../../shared/food-schedule";
import {DaysOfWeek} from "../../../shared/common/DaysOfWeek";
import {MdSelectChange} from "@angular/material";

@Component({
    selector: 'app-food-schedule-form',
    templateUrl: './food-schedule-form.component.html',
    styleUrls: ['./food-schedule-form.component.css']
})
export class FoodScheduleFormComponent implements OnInit {

    @Input() schedule: FoodSchedule = new FoodSchedule();
    weekFrequencyData = DaysOfWeek.getWeekFrequencyData();
    daysOfWeek = DaysOfWeek.getDaysOfWeek();

    constructor() {
    }

    ngOnInit() {
    }

    onDayOfWeekInputChange(chosenDayOfWeek : MdSelectChange) {
        this.schedule.addDayOfWeek(chosenDayOfWeek.value);
    }

    onSubmit() {
        console.log('submit');
    }
}
