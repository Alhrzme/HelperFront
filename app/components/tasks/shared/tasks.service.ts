import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Tasks } from './tasks.model';

@Injectable()
export class TasksService {

	constructor(private http: Http) { }

	getList(): Observable<Tasks[]> {
		return this.http.get('/api/list').map(res => res.json() as Tasks[]);
	}
}