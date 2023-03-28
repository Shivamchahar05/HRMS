import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingFeedbackComponent } from './training-feedback.component';

describe('TrainingFeedbackComponent', () => {
  let component: TrainingFeedbackComponent;
  let fixture: ComponentFixture<TrainingFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
