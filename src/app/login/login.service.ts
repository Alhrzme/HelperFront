import {Injectable} from '@angular/core';
import {User} from "./user.model";
import {Http, RequestOptions, Headers} from "@angular/http";
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";
import {CookieService} from "angular2-cookie/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {

    private isLoggedIn: boolean = false;
    redirectUrl: string = '/tasks';

    url: string = 'http://localhost:8886/app_dev.php/api/v1/';

    constructor(private http: Http, private cookieService: CookieService, private router: Router) {
    }

    authenticate(user: User) {
        let body = JSON.stringify(user);
        let url = this.url + 'authorize';
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        return this.http.post(url, body, options)
            .map(res => res.json())
            .catch(BaseService.handleError)
    }

    getIsAuthorized() {
        let loginToken = this.cookieService.get('login-token');
        let url = this.url + 'is_authorized/' + loginToken;

        return this.http.get(url)
            .map(res => res.json())
            .catch(BaseService.handleError);
    }

    checkCredentials() {
        return this.getIsAuthorized().map(
            res => {
                if (res.success) {
                    this.isLoggedIn = true;
                    return true;
                }

                this.router.navigate(['/login']);
                return false;
            }
        );
    }

    login(user: User) {
        this.authenticate(user).subscribe(
            response => {
                console.log(response);
                if (response.data) {
                    this.isLoggedIn = true;
                    this.cookieService.put('login-token', response.data);
                    this.router.navigate([this.redirectUrl]);
                } else {
                    console.log(response.Errors);
                }
            },
            error => console.log(error)
        )
    }

    logout() {
        this.isLoggedIn = false;
        this.cookieService.remove('login-token');
    }

    isLoginTokenSet() {
        return !!this.cookieService.get('login-token');
    }

    public isAuthorized() {
        return this.isLoggedIn;
    }
}
