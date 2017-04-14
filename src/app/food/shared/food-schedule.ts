import {DaysOfWeek} from "../../shared/common/DaysOfWeek";

export class FoodSchedule {
    daysOfWeek: string[];
    //todo: Заменю на объект
    foodName: string;
    weekFrequency: number;
    begin: string;
    end: string;

    public addDayOfWeek(dayOfWeek: string) {
        let days = [];
        if (dayOfWeek == 'every') {
            days = DaysOfWeek.getDaysOfWeekValues();
        } else if (dayOfWeek == 'weekend') {
            days = DaysOfWeek.getWeekendDays();
        } else if (dayOfWeek == 'weekdays') {
            days = DaysOfWeek.getWeekDays();
        } else {
            days = [dayOfWeek];
        }

        for (let day of days) {
            if (!this.daysOfWeek.includes(day)) {
                this.daysOfWeek.push(day);
            }
        }
    }
}