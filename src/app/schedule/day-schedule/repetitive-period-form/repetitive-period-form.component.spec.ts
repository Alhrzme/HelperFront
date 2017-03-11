import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetitivePeriodFormComponent } from './repetitive-period-form.component';

describe('RepetitivePeriodFormComponent', () => {
  let component: RepetitivePeriodFormComponent;
  let fixture: ComponentFixture<RepetitivePeriodFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepetitivePeriodFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepetitivePeriodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
