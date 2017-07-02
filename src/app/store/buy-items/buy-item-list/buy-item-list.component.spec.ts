import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyItemListComponent } from './buy-item-list.component';

describe('BuyItemListComponent', () => {
  let component: BuyItemListComponent;
  let fixture: ComponentFixture<BuyItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
