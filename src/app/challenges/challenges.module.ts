import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChallengesService} from "./challenges.service";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import { ChallengesComponent } from './challenges.component';
import {ChallengesListModule} from "./challenges-list/challenges-list.module";
import {ChallengesRoutingModule} from "./challenges-routing.module";
import { ChallengesFormComponent } from './challenges-form/challenges-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ChallengesListModule,
        ChallengesRoutingModule
    ],
    declarations: [
        ChallengesComponent,
        ChallengesFormComponent,
    ],
    providers: [
        ChallengesService
    ]
})
export class ChallengesModule {
}
