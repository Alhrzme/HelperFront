import {Injectable} from '@angular/core';
import {BaseService} from "../tasks/taskData/shared/services/base-service.service";
import {Listener} from "../listeners/shared/listener.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ListenersService extends BaseService {

    protected urlEnd: string = 'listeners';
    entityName = 'listener';

    constructor(protected http:HttpClient) {
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

    public editListener(listener: Listener) {
        return this.put(listener);
    }
}
