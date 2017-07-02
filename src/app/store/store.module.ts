import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store.component';
import {BuyItemService} from "./shared/buy-item.service";
import {ItemService} from "./shared/item.service";
import {ItemEntryService} from "./shared/item-entry.service";
import {StoreRoutingModule} from "./store-routing.module";
import {ItemListModule} from "./items/item-list/item-list.module";
import {BuyItemListModule} from "./buy-items/buy-item-list/buy-item-list.module";
import { ItemFormComponent } from './items/item-form/item-form.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import { BuyItemsComponent } from './buy-items/buy-items.component';
import { ItemsComponent } from './items/items.component';
import { BuyItemFormComponent } from './buy-items/buy-item-form/buy-item-form.component';

@NgModule({
    imports: [
        CommonModule,
        StoreRoutingModule,
        ItemListModule,
        BuyItemListModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        StoreComponent,
        ItemFormComponent,
        BuyItemsComponent,
        ItemsComponent,
        BuyItemFormComponent,
    ],
    providers: [
        BuyItemService,
        ItemService,
        ItemEntryService
    ]
})
export class StoreModule {
}
