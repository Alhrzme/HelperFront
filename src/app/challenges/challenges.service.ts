import {Injectable} from '@angular/core';
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";
import {Http} from "@angular/http";
import {Challenge} from "./challenge.model";

@Injectable()
export class ChallengesService extends BaseService {
    urlEnd:string = 'challenges';
    entityName = 'challenge';

    constructor(protected http: Http) {
        super();
    }

    getChallenges() {
        return this.gets();
    }

    addChallenge(challenge: Challenge) {
        return this.post(challenge);
    }

    removeChallenge(challenge: Challenge) {
        return this.httpDelete(challenge);
    }

    editChallenge(challenge: Challenge) {
        return this.put(challenge);
    }
}
