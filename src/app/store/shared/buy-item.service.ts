import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Http} from "@angular/http";
import {CookieService} from "angular2-cookie/core";
import {BuyItem} from "./buy-item.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BuyItemService extends BaseService {

    constructor(protected http: Http, protected cookieService: CookieService) {
        super();
    }

    urlEnd: string = 'buyitems';
    entityName = 'buyitem';

    getItems() {
        return this.gets();
    }

    addItem(item: BuyItem): Observable<BuyItem> {
        return this.post(item);
    }

    editBuyItem(item: BuyItem): Observable<BuyItem> {
        return this.put(item);
    }

    deleteBuyItem(item: BuyItem): Observable<BuyItem> {
        return this.httpDelete(item);
    }

}
