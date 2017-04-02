import {Component, OnInit} from '@angular/core';
import {User} from "./user.model";
import {LoginService} from "./login.service";
import {CookieService} from "angular2-cookie/core";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private loginService: LoginService,
                private cookieService: CookieService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onEnter(user: User) {
        this.loginService.login(user).subscribe(
            token => {
                this.cookieService.put('login-token', token);
                this.router.navigate(['/']);
            },
            error => console.log(error)
        )
    }
}
