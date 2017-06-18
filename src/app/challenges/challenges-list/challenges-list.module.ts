import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChallengesListComponent} from "./challenges-list.component";
import {ChallengesListItemComponent} from "./challenges-list-item/challenges-list-item.component";
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        ChallengesListComponent,
        ChallengesListItemComponent
    ],
    exports: [
        ChallengesListComponent
    ],
})
export class ChallengesListModule {
}
