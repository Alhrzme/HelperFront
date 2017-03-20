import {Injectable} from '@angular/core';
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";
import {Http} from "@angular/http";
import {Listener} from "../listeners/shared/listener.model";
import {Observable} from "rxjs";

@Injectable()
export class ListenersService extends BaseService {

    protected urlEnd: string = 'listeners';

    constructor(protected http:Http) {
        super();
    }

    public addListener (listener: Listener): Observable<Listener> {
        return this.post(listener);
    }

    public getListeners() {
        return this.gets()
    }

    public removeListener(listener:Listener) {
        return this.httpDelete(listener)
    }
}
