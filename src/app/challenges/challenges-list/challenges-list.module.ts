import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChallengesListComponent} from "./challenges-list.component";
import {ChallengesListItemComponent} from "./challenges-list-item/challenges-list-item.component";
import {ChallengesFormComponent} from "../challenges-form/challenges-form.component";
import {FormsModule} from "@angular/forms";
import {MatInputModule, MatButtonModule, MatSelectModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule
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
