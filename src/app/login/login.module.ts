import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule} from "@angular/forms";
import {LoginService} from "./login.service";
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        MdInputModule,
        CommonModule,
        RouterModule.forRoot([
            {
                path: 'login',
                component: LoginComponent
            }
        ]),
        FormsModule,
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
