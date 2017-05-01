import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {LoginService} from "../../login/login.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
        | Promise<boolean>
        | boolean {

        return this.canActivate(childRoute, state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
        | Observable<boolean>
        | Promise<boolean> {

        if (!this.loginService.isAuthorized()) {
            this.loginService.redirectUrl = state.url;
            if (!this.loginService.isLoginTokenSet()) {
                this.router.navigate(['/login']);
                return false;
            }

            return this.loginService.checkCredentials();
        }

        return true;
    }


    constructor(private loginService: LoginService, private router: Router) {
    }

}
