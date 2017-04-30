import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsFormHomeComponent } from './meals-form-home.component';

describe('MealsFormHomeComponent', () => {
  let component: MealsFormHomeComponent;
  let fixture: ComponentFixture<MealsFormHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsFormHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsFormHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
