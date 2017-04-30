import {Meal} from "./meal.model";

export class MealEntry {
    id: number;
    date: string;
    meal: Meal;
    isPerformed: boolean;
}