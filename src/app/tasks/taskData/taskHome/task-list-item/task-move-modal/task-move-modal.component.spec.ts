import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMoveModalComponent } from './task-move-modal.component';

describe('TaskMoveModalComponent', () => {
  let component: TaskMoveModalComponent;
  let fixture: ComponentFixture<TaskMoveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskMoveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskMoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
