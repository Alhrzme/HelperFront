import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Error} from "./error.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ErrorsService extends BaseService {

    urlEnd:string = 'errors';
    entityName = 'error';

    constructor(protected http: HttpClient) {
        super();
    }

    public editError(error:Error) {
        return this.put(error);
    }

    public getErrorData(errorId) {
        return this.get(errorId);
    }

    public getErrors() {
        return this.gets();
    }

    public createError(error: Error) {
        return this.post(error);
    }

}
