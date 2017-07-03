import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuyItemListComponent} from './buy-item-list.component';
import {BuyItemListItemComponent} from './buy-item-list-item/buy-item-list-item.component';
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        BuyItemListComponent,
        BuyItemListItemComponent
    ],
    exports: [
        BuyItemListComponent
    ]
})
export class BuyItemListModule {
}
