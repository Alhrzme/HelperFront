import {Dish} from "./dish.model";
import {IngredientData} from "./IngredientData.model";

export class Recipe {
    id: number;
    title:string;
    description: string;
    dish: Dish;
    ingredientsData: IngredientData[] = [];
}