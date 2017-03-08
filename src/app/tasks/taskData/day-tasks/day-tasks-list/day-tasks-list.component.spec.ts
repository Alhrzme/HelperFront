import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTasksListComponent } from './day-tasks-list.component';

describe('DayTasksListComponent', () => {
  let component: DayTasksListComponent;
  let fixture: ComponentFixture<DayTasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayTasksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
