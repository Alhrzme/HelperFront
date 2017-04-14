import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodScheduleComponent } from './food-schedule.component';

describe('FoodScheduleComponent', () => {
  let component: FoodScheduleComponent;
  let fixture: ComponentFixture<FoodScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
