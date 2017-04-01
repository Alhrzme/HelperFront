import {Injectable} from '@angular/core';
import {User} from "./user.model";
import {Http, RequestOptions, Headers} from "@angular/http";
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";

@Injectable()
export class LoginService {

    url: string =  'http://localhost:8886/app_dev.php/api/v1/';
    constructor(private http: Http) {
    }

    login(user: User) {
        let body = JSON.stringify(user);
        let url = this.url + 'authorize';
        console.log(url);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        return this.http.post(url, body, options)
            .map(BaseService.extractData)
            .catch(BaseService.handleError)
    }
}
