import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChallengesListComponent} from "./challenges-list.component";
import {ChallengesListItemComponent} from "./challenges-list-item/challenges-list-item.component";
import {MaterialModule} from "@angular/material";
import {ChallengesFormComponent} from "../challenges-form/challenges-form.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [
        ChallengesListComponent,
        ChallengesListItemComponent,
        ChallengesFormComponent
    ],
    exports: [
        ChallengesListComponent,
        ChallengesFormComponent
    ],
})
export class ChallengesListModule {
}
