import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemListComponent} from './item-list.component';
import {ItemListItemComponent} from './item-list-item/item-list-item.component';
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        ItemListComponent,
        ItemListItemComponent
    ],
    exports: [
        ItemListComponent
    ]
})
export class ItemListModule {
}
