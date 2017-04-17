import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDataListItemComponent } from './ingredient-data-list-item.component';

describe('IngredientDataListItemComponent', () => {
  let component: IngredientDataListItemComponent;
  let fixture: ComponentFixture<IngredientDataListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientDataListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientDataListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
