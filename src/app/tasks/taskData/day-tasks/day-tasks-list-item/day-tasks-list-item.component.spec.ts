import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTasksListItemComponent } from './day-tasks-list-item.component';

describe('DayTasksListItemComponent', () => {
  let component: DayTasksListItemComponent;
  let fixture: ComponentFixture<DayTasksListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayTasksListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTasksListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
