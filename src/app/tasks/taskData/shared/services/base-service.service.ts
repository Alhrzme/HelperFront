import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CookieService} from "angular2-cookie/core";
import {DateCondition} from "../../../../shared/models/date-condition.model";
import {IDateCondition} from "../../../../shared/common/IDateCondition";

@Injectable()
export class BaseService {

    protected baseApiUrl: string = 'http://localhost:8080/app_dev.php/api/v1/';
    protected urlEnd: string;
    protected entityName: string;
    protected http: Http;
    protected cookieService: CookieService;

    public static handleError(error: any): Observable<any> {
        console.log('Произошла ошибка', error);
        alert('Обшибка');
        return Observable.throw(error.message || error);
    }

    public static extractData(res: Response) {
        console.log(res.json());
        return res.json().data;
    }

    protected gets(params?: string) {
        let url = this.baseApiUrl + this.urlEnd;
        if (params) {
            url += '?' + params;
            url = this.addTokenToRequest(url, true);
        } else {
            url = this.addTokenToRequest(url);
        }

        return this.http.get(url)
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }

    protected get(id: number) {
        let url = this.baseApiUrl + this.urlEnd + '/' + id;
        url = this.addTokenToRequest(url);

        return this.http.get(url)
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }

    protected post(entity, url: string = this.baseApiUrl + this.urlEnd, isWithCondition = false) {
        let result = this.addTokenToObject(entity);

        let body = isWithCondition ? this.convertWithCondition(result) : this.convertToString(result);
        console.log(body);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        return this.http.post(url, body, options)
            .map(BaseService.extractData)
            .catch(BaseService.handleError)
    }

    addTokenToObject(entity) {
        let result = {};
        let token = this.cookieService.get('login-token');
        result[this.entityName] = entity;
        result['token'] = token;

        return result;
    }

    protected addTokenToRequest(body, hasParams = false) {
        let token = this.cookieService.get('login-token');
        let paramsStart = hasParams ? '&' : '?';
        body += paramsStart + 'token=' + token;

        return body;
    }

    protected put(entity) {
        let result = this.addTokenToObject(entity);
        let body = this.convertToString(result);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        let url = `${this.baseApiUrl + this.urlEnd}/${entity.id}`;


        return this.http.put(url, body, options)
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
    }

    protected httpDelete(task) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        let url = `${this.baseApiUrl + this.urlEnd}/${task.id}`;
        url = this.addTokenToRequest(url, false);

        return this.http.delete(url, options)
            .map(BaseService.extractData)
            .catch(BaseService.handleError);
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
