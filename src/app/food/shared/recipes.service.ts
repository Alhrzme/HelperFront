import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Http} from "@angular/http";
import {CookieService} from "angular2-cookie/core";
import {Recipe} from "./recipe.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecipesService extends BaseService {
    protected urlEnd: string = 'recipes';
    protected entityName: string = 'recipe';

    constructor(protected http:Http, protected cookieService: CookieService) {
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

    editRecipe(recipe: Recipe): Observable<Recipe> {
        return this.put(recipe);
    }

    deleteTask (recipe: Recipe): Observable<Recipe> {
        return this.httpDelete(recipe);
    }
}
