import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelEnrollComponent } from './cancel-enroll.component';

describe('CancelEnrollComponent', () => {
  let component: CancelEnrollComponent;
  let fixture: ComponentFixture<CancelEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelEnrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
