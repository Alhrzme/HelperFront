import {Dish} from "./dish.model";
import {MealType} from "./mealType.model";

export class Meal {
    id: number;
    title: string;
    mealType: MealType;
    dishes: Dish[];
}