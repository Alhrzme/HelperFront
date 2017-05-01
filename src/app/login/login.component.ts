import {Component, OnInit} from '@angular/core';
import {User} from "./user.model";
import {LoginService} from "./login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private loginService: LoginService) {
    }

    ngOnInit() {
    }

    onEnter(user: User) {
        return this.loginService.login(user);
    }
}
