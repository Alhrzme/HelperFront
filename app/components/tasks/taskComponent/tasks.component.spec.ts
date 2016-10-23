import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { TasksComponent } from './tasks.component';
import { TasksService } from '../shared/tasks.service';
import { Tasks } from '../shared/tasks.model';

describe('a tasks component', () => {
	let component: TasksComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: TasksService, useClass: MockTasksService },
				TasksComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TasksComponent], (TasksComponent) => {
		component = TasksComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original tasks service
class MockTasksService extends TasksService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
