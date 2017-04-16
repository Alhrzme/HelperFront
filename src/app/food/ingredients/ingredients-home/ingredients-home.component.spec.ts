import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsHomeComponent } from './ingredients-home.component';

describe('IngredientsHomeComponent', () => {
  let component: IngredientsHomeComponent;
  let fixture: ComponentFixture<IngredientsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
