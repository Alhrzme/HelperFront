import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store.component';
import {BuyItemService} from "./shared/buy-item.service";
import {ItemService} from "./shared/item.service";
import {ItemEntryService} from "./shared/item-entry.service";
import {StoreRoutingModule} from "./store-routing.module";
import { StoreFormComponent } from './store-form/store-form.component';
import {ItemListModule} from "./item-list/item-list.module";
import {BuyItemListModule} from "./buy-item-list/buy-item-list.module";

@NgModule({
    imports: [
        CommonModule,
        StoreRoutingModule,
        ItemListModule,
        BuyItemListModule
    ],
    declarations: [
        StoreComponent,
        StoreFormComponent,
    ],
    providers: [
        BuyItemService,
        ItemService,
        ItemEntryService
    ]
})
export class StoreModule {
}
