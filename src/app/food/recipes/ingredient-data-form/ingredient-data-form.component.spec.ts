import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDataFormComponent } from './ingredient-data-form.component';

describe('IngredientDataFormComponent', () => {
  let component: IngredientDataFormComponent;
  let fixture: ComponentFixture<IngredientDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
