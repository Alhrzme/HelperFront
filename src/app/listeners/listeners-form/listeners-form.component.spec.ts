import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenersFormComponent } from './listeners-form.component';

describe('ListenersFormComponent', () => {
  let component: ListenersFormComponent;
  let fixture: ComponentFixture<ListenersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
