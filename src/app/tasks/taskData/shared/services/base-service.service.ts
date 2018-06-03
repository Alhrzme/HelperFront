import {Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, catchError} from 'rxjs/operators';
import {Observable} from "rxjs/index";
import { of } from 'rxjs';

@Injectable()
export class BaseService {

    protected baseApiUrl: string = 'https://api.twto.ru/web/api/v1/';
    // protected baseApiUrl: string = 'http://localhost:8080/app_dev.php/api/v1/';
    protected urlEnd: string;
    protected entities;
    protected entityName: string;
    protected http: HttpClient;


    public static handleError(error: any): Observable<any> {
        console.log('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }

    public static extractData(res: Response) {
        console.log(res);
        return res['data'];
    }

    public getSavedEntities(params?: string) {
        let identifier = params ? params : 'withoutParams';
        if (!this.entities || !this.entities[identifier]) {
            return this.gets(params);
        }

        return of(this.entities[identifier]);
    }

    protected gets(params?: string) {
        let url = this.baseApiUrl + this.urlEnd;
        if (params) {
            url += '?' + params;
            url = this.addTokenToRequest(url, true);
        } else {
            url = this.addTokenToRequest(url);
        }

        return this.http.get(url).pipe(
            map((res: Response) => {
                let responseData = res.data;
                console.log(responseData);
                let identifier = params ? params : 'withoutParams';
                if (!this.entities) {
                    this.entities = [];
                }
                this.entities[identifier] = responseData;
                return responseData;
            }),
            catchError(BaseService.handleError));
    }

    protected get(id: number) {
        let url = this.baseApiUrl + this.urlEnd + '/' + id;
        url = this.addTokenToRequest(url);

        return this.http.get(url).pipe(
            map(BaseService.extractData)
            ,catchError(BaseService.handleError));
    }

    protected post(entity, url: string = this.baseApiUrl + this.urlEnd, isWithCondition = false) {
        let result = this.addTokenToObject(entity);

        let body = isWithCondition ? this.convertWithCondition(result) : this.convertToString(result);
        console.log(body);
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this.http.post(url, body, {headers}).pipe(
            map(BaseService.extractData)
            , catchError(BaseService.handleError))
    }

    addTokenToObject(entity) {
        let result = {};
        let token = localStorage.getItem('login-token');
        result[this.entityName] = entity;
        result['token'] = token;

        return result;
    }

    protected addTokenToRequest(body, hasParams = false) {
        let token = localStorage.getItem('login-token');
        let paramsStart = hasParams ? '&' : '?';
        body += paramsStart + 'token=' + token;

        return body;
    }

    protected put(entity, url: string = `${this.baseApiUrl + this.urlEnd}/${entity.id}`) {
        let result = this.addTokenToObject(entity);
        let body = this.convertToString(result);

        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this.http.put(url, body, {headers}).pipe(
            map(BaseService.extractData)
            ,catchError(BaseService.handleError));
    }

    protected httpDelete(entity) {
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        let url = `${this.baseApiUrl + this.urlEnd}/${entity.id}`;
        url = this.addTokenToRequest(url, false);

        return this.http.delete(url, {headers})
            map(BaseService.extractData),
            catchError(BaseService.handleError);
    }

    protected convertToString(entity) {
        return JSON.stringify(entity);
    }

    protected convertWithCondition(result) {
        let entityData = result[this.entityName];
        let conditionData = entityData.condition;
        delete entityData.condition;
        result[this.entityName] = {
            entity: entityData, condition: conditionData
        };

        return JSON.stringify(result);
    }
}
