import {Dish} from "./dish.model";
import {IngredientData} from "./IngredientData.model";

export class Recipe {
    title:string;
    description: string;
    dish: Dish;
    ingredientsData: IngredientData[];
}