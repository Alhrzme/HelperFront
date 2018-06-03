import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Recipe} from "./recipe.model";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RecipesService extends BaseService {
    protected urlEnd: string = 'recipes';
    protected entityName: string = 'recipe';

    constructor(protected http:HttpClient) {
        super();
    }

    getRecipes() {
        return this.gets();
    }

    addRecipe(recipe: Recipe) {
        return this.post(recipe);
    }

    getRecipe(id:number) {
        return this.get(id);
    }

    editRecipe(recipe: Recipe) {
        return this.put(recipe);
    }

    deleteTask (recipe: Recipe) {
        return this.httpDelete(recipe);
    }

    protected convertToString(request) {
        let cloneRequestObj = JSON.parse(JSON.stringify(request));
        for (let ingredientDataIndex in cloneRequestObj.recipe.ingredientsData) {
            cloneRequestObj.recipe.ingredientsData[ingredientDataIndex].ingredient
                = cloneRequestObj.recipe.ingredientsData[ingredientDataIndex].ingredient.id;
        }

        cloneRequestObj.recipe.dish = cloneRequestObj.recipe.dish.id;
        console.log(cloneRequestObj);

        return JSON.stringify(cloneRequestObj);
    }
}
