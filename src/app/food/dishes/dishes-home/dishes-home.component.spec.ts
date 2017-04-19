import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesHomeComponent } from './dishes-home.component';

describe('DishesHomeComponent', () => {
  let component: DishesHomeComponent;
  let fixture: ComponentFixture<DishesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
