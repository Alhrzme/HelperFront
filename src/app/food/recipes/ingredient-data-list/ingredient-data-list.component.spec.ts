import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDataListComponent } from './ingredient-data-list.component';

describe('IngredientDataListComponent', () => {
  let component: IngredientDataListComponent;
  let fixture: ComponentFixture<IngredientDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
