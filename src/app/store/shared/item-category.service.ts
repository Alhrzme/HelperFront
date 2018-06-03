import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {ItemCategory} from "./item-category";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ItemCategoryService extends BaseService {
    constructor(protected http: HttpClient) {
        super();
    }

    urlEnd: string = 'itemcategories';
    entityName = 'itemcategory';

    getCategories() {
        return this.gets();
    }

    addItemCategory(category: ItemCategory) {
        return this.post(category);
    }

    editItem(category: ItemCategory) {
        return this.put(category);
    }

    deleteItem(category: ItemCategory) {
        return this.httpDelete(category );
    }
}
