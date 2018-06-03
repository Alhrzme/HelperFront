import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {BuyItem} from "./buy-item.model";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BuyItemService extends BaseService {

    constructor(protected http: HttpClient) {
        super();
    }

    urlEnd: string = 'buyitems';
    entityName = 'buyitem';

    getItems() {
        return this.gets();
    }

    addItem(item: BuyItem) {
        return this.post(item);
    }

    editBuyItem(item: BuyItem) {
        const editedBuyItem = JSON.parse(JSON.stringify(item));
        editedBuyItem.item = editedBuyItem.item.id;

        return this.put(editedBuyItem);
    }

    deleteBuyItem(item: BuyItem) {
        return this.httpDelete(item);
    }


}
