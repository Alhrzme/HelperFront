import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayMealListItemComponent } from './day-meal-list-item.component';

describe('DayMealListItemComponent', () => {
  let component: DayMealListItemComponent;
  let fixture: ComponentFixture<DayMealListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayMealListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayMealListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
