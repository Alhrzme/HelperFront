import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Dish} from "./dish.model";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DishesService extends BaseService {

    protected urlEnd: string = 'dishes';
    protected entityName: string = 'dish';

    constructor(protected http:HttpClient) {
        super();
    }

    addDish (dish : Dish) {
        return this.post(dish);
    }

    getDishes() {
        return this.gets()
    }

    getDish(id:number) {
        return this.get(id);
    }

    editDish(dish: Dish) {
        return this.put(Dish);
    }

    deleteDish (dish : Dish) {
        return this.httpDelete(dish);
    }

}
