import {MealType} from "./mealType.model";
import {Dish} from "./dish.model";

export class RepetitiveMeal {
    title: string;
    mealType: MealType;
    dishes: Dish[];
    beginDate: string;
    endDate: string;
    daysOfWeek: string[];
    weekFrequency: number;
    newMealsCreateTask: boolean;
}