import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Ingredient} from "./ingredient.model";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class IngredientsService extends BaseService {

    protected urlEnd: string = 'ingredients';
    protected entityName: string = 'ingredient';

    constructor(protected http: HttpClient) {
        super();
    }

    addIngredient (ingredient : Ingredient) {
        return this.post(ingredient);
    }

    getIngredients() {
        return this.gets()
    }

    getIngredient(id:number) {
        return this.get(id);
    }

    editIngredient(ingredient: Ingredient) {
        return this.put(ingredient);
    }

    deleteTask (ingredient: Ingredient) {
        return this.httpDelete(ingredient);
    }

}
