import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {LoginService} from "./login.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([
            {
                path: 'login',
                component: LoginComponent
            }
        ]),
        FormsModule,
        MaterialModule
    ],
    declarations: [
        LoginComponent,
        LoginFormComponent
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule {
}
