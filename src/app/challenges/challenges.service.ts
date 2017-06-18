import {Injectable} from '@angular/core';
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";
import {Http} from "@angular/http";
import {CookieService} from "angular2-cookie/core";
import {Challenge} from "./challenge.model";

@Injectable()
export class ChallengesService extends BaseService {
    urlEnd:string = 'challenges';
    entityName = 'challenge';

    constructor(protected http: Http, protected cookieService: CookieService) {
        super();
    }

    getChallenges() {
        return this.gets();
    }

    addChallenge(challenge: Challenge) {
        return this.post(challenge);
    }

}
