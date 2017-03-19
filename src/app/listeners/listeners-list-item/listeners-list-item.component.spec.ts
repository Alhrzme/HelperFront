import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenersListItemComponent } from './listeners-list-item.component';

describe('ListenersListItemComponent', () => {
  let component: ListenersListItemComponent;
  let fixture: ComponentFixture<ListenersListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenersListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
