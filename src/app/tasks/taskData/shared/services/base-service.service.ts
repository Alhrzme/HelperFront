import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AbstractTask} from "../models/abstract-task.model";

@Injectable()
export class BaseService {

    protected baseApiUrl: string = 'http://localhost:8886/app_dev.php/api/v1/';
    protected urlEnd: string;
    protected http: Http;

    protected static handleError(error: any): Observable<any> {
        console.log('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }

    protected static extractData(res: Response) {
        console.log(res.json());
        return res.json().data;
    }

    protected gets(date?:string): Observable<AbstractTask[]> {
        let url = this.baseApiUrl + this.urlEnd;
        if (date) {
            url += '?date=' + date;
        }
        return this.http.get(url)
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }

    protected get(id: number): Observable<AbstractTask> {
        return this.http.get(this.baseApiUrl + this.urlEnd + '/' + id)
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }

    protected post(task: AbstractTask, url: string = this.baseApiUrl + this.urlEnd): Observable<AbstractTask> {
        let body = JSON.stringify(task);
        console.log(body);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        return this.http.post(url, body, options)
            .map(BaseService.extractData)
            .catch(BaseService.handleError)
    }

    protected put(task: AbstractTask): Observable<AbstractTask> {
        let body = JSON.stringify(task);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        let url = `${this.baseApiUrl + this.urlEnd}/${task.id}`;

        return this.http.put(url, body, options)
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }

    protected httpDelete(task: AbstractTask): Observable<AbstractTask> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        let url = `${this.baseApiUrl + this.urlEnd}/${task.id}`;

        return this.http.delete(url, options)
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }
}
