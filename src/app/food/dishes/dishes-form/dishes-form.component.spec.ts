import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesFormComponent } from './dishes-form.component';

describe('DishesFormComponent', () => {
  let component: DishesFormComponent;
  let fixture: ComponentFixture<DishesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
