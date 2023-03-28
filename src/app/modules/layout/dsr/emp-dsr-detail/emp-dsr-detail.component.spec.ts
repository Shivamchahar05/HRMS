import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDsrDetailComponent } from './emp-dsr-detail.component';

describe('EmpDsrDetailComponent', () => {
  let component: EmpDsrDetailComponent;
  let fixture: ComponentFixture<EmpDsrDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDsrDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDsrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
