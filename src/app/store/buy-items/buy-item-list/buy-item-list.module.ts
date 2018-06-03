import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuyItemListComponent} from './buy-item-list.component';
import {BuyItemListItemComponent} from './buy-item-list-item/buy-item-list-item.component';
import {KeysPipe} from "../../../shared/pipes/keys.pipe";
import {MatInputModule, MatButtonModule, MatIconModule, MatTooltipModule, MatListModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatTooltipModule,
        MatListModule
    ],
    declarations: [
        BuyItemListComponent,
        BuyItemListItemComponent,
        KeysPipe
    ],
    exports: [
        BuyItemListComponent
    ]
})
export class BuyItemListModule {
}
