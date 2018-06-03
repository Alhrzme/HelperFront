import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {MealType} from "./mealType.model";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MealTypesService extends BaseService {
    urlEnd:string = 'mealtypes';
    entityName = 'mealType';

    constructor( protected http: HttpClient) {
        super();
    }

    addMealType (mealType : MealType) {
        return this.post(mealType);
    }

    getMealTypes() {
        return this.gets()
    }

    getMealType(id:number) {
        return this.get(id);
    }

    editMealType(mealType: MealType) {
        return this.put(mealType);
    }

    deleteMealType (mealType : MealType) {
        return this.httpDelete(mealType);
    }
}
