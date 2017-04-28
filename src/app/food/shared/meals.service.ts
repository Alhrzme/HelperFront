import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Meal} from "./meal.model";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {CookieService} from "angular2-cookie/core";

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

}
