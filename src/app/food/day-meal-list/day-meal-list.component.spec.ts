import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayMealListComponent } from './day-meal-list.component';

describe('DayMealListComponent', () => {
  let component: DayMealListComponent;
  let fixture: ComponentFixture<DayMealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayMealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayMealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
