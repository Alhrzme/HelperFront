import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyItemListItemComponent } from './buy-item-list-item.component';

describe('BuyItemListItemComponent', () => {
  let component: BuyItemListItemComponent;
  let fixture: ComponentFixture<BuyItemListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyItemListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyItemListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
