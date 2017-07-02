import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyItemFormComponent } from './buy-item-form.component';

describe('BuyItemFormComponent', () => {
  let component: BuyItemFormComponent;
  let fixture: ComponentFixture<BuyItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
