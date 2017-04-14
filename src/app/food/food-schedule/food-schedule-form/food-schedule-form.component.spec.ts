import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodScheduleFormComponent } from './food-schedule-form.component';

describe('FoodScheduleFormComponent', () => {
  let component: FoodScheduleFormComponent;
  let fixture: ComponentFixture<FoodScheduleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodScheduleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodScheduleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
