
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AbstractTask} from "../models/abstract-task.model";

@Injectable()
export class BaseTaskService {

    protected baseApiUrl:string = 'http://localhost:8886/app.php/api/v1/';
    protected urlEnd:string;
    protected http:Http;

    protected handleError(error: any): Observable<any> {
        console.log('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }

    protected extractData(res:Response) {
        console.log(res.json());
        return res.json().data;
    }

    protected gets(): Observable<AbstractTask[]> {
        return this.http.get(this.baseApiUrl + this.urlEnd)
            .map(this.extractData)
            .catch(this.handleError);
    }

    protected get(id : number) : Observable<AbstractTask> {
        return this.http.get(this.baseApiUrl + this.urlEnd + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    protected post(task: AbstractTask): Observable<AbstractTask> {
        let body = JSON.stringify(task);
        console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(this.baseApiUrl + this.urlEnd, body, options)
            .map(this.extractData)
            .catch(this.handleError)
    }

    protected put(task:AbstractTask) : Observable<AbstractTask> {
        let body = JSON.stringify(task);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.baseApiUrl + this.urlEnd}/${task.id}`;

        return this.http.put(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    protected delete(task: AbstractTask): Observable<AbstractTask> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });

        let url = `${this.baseApiUrl + this.urlEnd}/${task.id}`;

        return this.http.delete(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
