import {Injectable} from '@angular/core';
import {User} from "./user.model";
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NotificationsService} from "angular2-notifications";
import {map, catchError} from 'rxjs/operators';
import {Observable, of} from "rxjs/index";

@Injectable()
export class LoginService {

    private isLoggedIn: boolean = false;
    redirectUrl: string = '/tasks';

    url: string = 'https://api.twto.ru/web/api/v1/';

    // url: string = 'http://localhost:8080/app_dev.php/api/v1/';

    constructor(private http: HttpClient, private router: Router, private notifications: NotificationsService) {
    }

    authenticate(user: User) {
        let body = JSON.stringify(user);
        let url = this.url + 'authorize';
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this.http.post(url, body, {headers}).pipe(
            map(res => res),
            catchError(BaseService.handleError))
    }

    getIsAuthorized() {
        let loginToken = localStorage.getItem('login-token');
        const body = JSON.stringify({token: loginToken});
        let url = this.url + 'is_authorized';

        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this.http.post(url, body, {headers}).pipe(
            map(res => res),
            catchError(BaseService.handleError))
    }

    checkCredentials() {
        return this.getIsAuthorized().pipe(
            map(
                res => {
                    if (res['success']) {
                        this.isLoggedIn = true;
                        return true;
                    }

                    this.router.navigate(['/login']);
                    return false;
                })
        , catchError(
            error => {
                this.router.navigate(['/login']);
                return of(false);
            }
        ));
    }

    login(user: User) {
        this.authenticate(user).subscribe(
            response => {
                console.log(response);
                if (response['data']) {
                    this.isLoggedIn = true;
                    localStorage.setItem('login-token', response['data']);
                    this.router.navigate([this.redirectUrl]);
                } else {
                    response['errors'].forEach((error) => {
                        this.notifications.error('Ошибка авторизации!', error);
                    })
                }
            },
            error => console.log(error)
        )
    }

    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('login-token');
    }

    isLoginTokenSet() {
        return !!localStorage.getItem('login-token');
    }

    public isAuthorized() {
        return this.isLoggedIn;
    }
}
