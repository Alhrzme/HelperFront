import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {CookieService} from "angular2-cookie/core";
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Item} from "./item.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ItemService extends BaseService {
    constructor(protected http: Http, protected cookieService: CookieService) {
        super();
    }

    urlEnd: string = 'items';
    entityName = 'item';

    getItems() {
        return this.gets();
    }

    addItem(item: Item): Observable<Item> {
        return this.post(item);
    }

    editItem(item: Item): Observable<Item> {
        return this.put(item);
    }

    deleteItem(item: Item): Observable<Item> {
        return this.httpDelete(item);
    }
}
