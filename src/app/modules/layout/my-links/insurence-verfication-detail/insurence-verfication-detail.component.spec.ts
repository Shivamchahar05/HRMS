import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurenceVerficationDetailComponent } from './insurence-verfication-detail.component';

describe('InsurenceVerficationDetailComponent', () => {
  let component: InsurenceVerficationDetailComponent;
  let fixture: ComponentFixture<InsurenceVerficationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurenceVerficationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurenceVerficationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
