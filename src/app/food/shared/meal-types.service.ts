import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {MealType} from "./mealType.model";
import {Observable} from "rxjs/Observable";
import {CookieService} from "angular2-cookie/core";
import {Http} from "@angular/http";

@Injectable()
export class MealTypesService extends BaseService {
    urlEnd:string = 'mealtypes';
    entityName = 'mealType';

    constructor(protected cookieService: CookieService, protected http: Http) {
        super();
    }

    addMealType (mealType : MealType): Observable<MealType> {
        return this.post(mealType);
    }

    getMealTypes() {
        return this.gets()
    }

    getMealType(id:number) {
        return this.get(id);
    }

    editMealType(mealType: MealType): Observable<MealType> {
        return this.put(mealType);
    }

    deleteMealType (mealType : MealType): Observable<MealType> {
        return this.httpDelete(mealType);
    }
}
