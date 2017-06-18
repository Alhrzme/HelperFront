import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AuthGuardService} from "../shared/guards/auth-guard.service";
import {ChallengesComponent} from "./challenges.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path : 'challenges',
                canActivate: [AuthGuardService],
                children: [
                    {
                        path: '',
                        component: ChallengesComponent
                    }
                ]
            }
        ])
    ],
    declarations: []
})
export class ChallengesRoutingModule {
}
