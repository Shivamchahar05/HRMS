import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDetailsUnderComponent } from './training-details-under.component';

describe('TrainingDetailsUnderComponent', () => {
  let component: TrainingDetailsUnderComponent;
  let fixture: ComponentFixture<TrainingDetailsUnderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDetailsUnderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingDetailsUnderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
