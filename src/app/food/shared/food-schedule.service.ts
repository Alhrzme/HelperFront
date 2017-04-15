import {Injectable} from '@angular/core';
import {BaseService} from "../../tasks/taskData/shared/services/base-service.service";
import {Http} from "@angular/http";
import {CookieService} from "angular2-cookie/core";

@Injectable()
export class FoodScheduleService extends BaseService {
    protected urlEnd: string = 'food_schedule';
    protected entityName: string = 'foodSchedule';
    constructor(protected http: Http, protected cookieService: CookieService) {
        super();
    }

}
