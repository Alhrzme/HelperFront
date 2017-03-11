import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsListItemComponent } from './errors-list-item.component';

describe('ErrorsListItemComponent', () => {
  let component: ErrorsListItemComponent;
  let fixture: ComponentFixture<ErrorsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
