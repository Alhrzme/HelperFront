import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Http} from "@angular/http";
import {CookieService} from "angular2-cookie/core";
import {Ingredient} from "./ingredient.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class IngredientsService extends BaseService {

    protected urlEnd: string = 'ingredients';
    protected entityName: string = 'ingredient';

    constructor(protected http: Http) {
        super();
    }

    addIngredient (ingredient : Ingredient): Observable<Ingredient> {
        return this.post(ingredient);
    }

    getIngredients() {
        return this.gets()
    }

    getIngredient(id:number) {
        return this.get(id);
    }

    editIngredient(ingredient: Ingredient): Observable<Ingredient> {
        return this.put(ingredient);
    }

    deleteTask (ingredient: Ingredient): Observable<Ingredient> {
        return this.httpDelete(ingredient);
    }

}
