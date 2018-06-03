import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Meal} from "./meal.model";
import {Observable} from "rxjs/index";
import {RepetitiveMeal} from "./rMeal.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MealsService extends BaseService {

    urlEnd:string = 'meals';
    entityName = 'meal';

    constructor(protected http: HttpClient) {
        super();
    }

    addMeal (meal : Meal) {
        return this.post(meal);
    }

    addMeals(rMeal: RepetitiveMeal) {
        return this.post(rMeal, this.baseApiUrl + 'rmeals');
    }

    getMeals(date?:string) {
        if (date) {
            return this.gets('date=' + date);
        }

        return this.gets()
    }

    getMeal(id:number) {
        return this.get(id);
    }

    editMeal(meal: Meal) {
        return this.put(meal);
    }

    deleteMeal (meal : Meal) {
        return this.httpDelete(meal);
    }

    protected convertToString(request) {
        let cloneRequestObj = JSON.parse(JSON.stringify(request));
        for (let dishIndex in cloneRequestObj.meal.dishes) {
            cloneRequestObj.meal.dishes[dishIndex] =
                cloneRequestObj.meal.dishes[dishIndex].id;
        }

        cloneRequestObj.meal.mealType = cloneRequestObj.meal.mealType.id;
        console.log(cloneRequestObj);

        return JSON.stringify(cloneRequestObj);
    }
}
