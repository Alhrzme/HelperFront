import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Meal} from "./meal.model";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {CookieService} from "angular2-cookie/core";
import {RepetitiveMeal} from "./rMeal.model";

@Injectable()
export class MealsService extends BaseService {

    urlEnd:string = 'meals';
    entityName = 'meal';

    constructor(protected http: Http, protected cookieService: CookieService) {
        super();
    }

    addMeal (meal : Meal): Observable<Meal> {
        return this.post(meal);
    }

    addMeals(rMeal: RepetitiveMeal): Observable<Meal> {
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

    editMeal(meal: Meal): Observable<Meal> {
        return this.put(meal);
    }

    deleteMeal (meal : Meal): Observable<Meal> {
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
