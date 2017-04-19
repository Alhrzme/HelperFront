import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesFormHomeComponent } from './recipes-form-home.component';

describe('RecipesFormHomeComponent', () => {
  let component: RecipesFormHomeComponent;
  let fixture: ComponentFixture<RecipesFormHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesFormHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesFormHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
