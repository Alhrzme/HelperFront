import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChallengesService} from "./challenges.service";
import {FormsModule} from "@angular/forms";
import { ChallengesComponent } from './challenges.component';
import {ChallengesListModule} from "./challenges-list/challenges-list.module";
import {ChallengesRoutingModule} from "./challenges-routing.module";
import {MatIconModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChallengesListModule,
        ChallengesRoutingModule,
        MatIconModule
    ],
    declarations: [
        ChallengesComponent,
    ],
    providers: [
        ChallengesService
    ]
})
export class ChallengesModule {
}
