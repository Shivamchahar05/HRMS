import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaryDialogComponent } from './galary-dialog.component';

describe('GalaryDialogComponent', () => {
  let component: GalaryDialogComponent;
  let fixture: ComponentFixture<GalaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalaryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
