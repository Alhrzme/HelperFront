import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsExtendedFormComponent } from './errors-extended-form.component';

describe('ErrorsExtendedFormComponent', () => {
  let component: ErrorsExtendedFormComponent;
  let fixture: ComponentFixture<ErrorsExtendedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsExtendedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsExtendedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
