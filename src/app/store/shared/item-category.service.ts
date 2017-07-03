import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Http} from "@angular/http";
import {CookieService} from "angular2-cookie/core";
import {ItemCategory} from "./item-category";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ItemCategoryService extends BaseService {
    constructor(protected http: Http, protected cookieService: CookieService) {
        super();
    }

    urlEnd: string = 'itemcategories';
    entityName = 'itemcategory';

    getCategories() {
        return this.gets();
    }

    addItemCategory(category: ItemCategory): Observable<ItemCategory> {
        return this.post(category);
    }

    editItem(category: ItemCategory): Observable<ItemCategory> {
        return this.put(category);
    }

    deleteItem(category: ItemCategory): Observable<ItemCategory> {
        return this.httpDelete(category );
    }
}
