import {Recipe} from "./recipe.model";

export class Dish {
    id: number;
    title: string;
    description: string;
    recipes: Recipe[];
}