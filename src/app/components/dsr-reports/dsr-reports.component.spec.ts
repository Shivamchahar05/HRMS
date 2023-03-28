import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSRReportsComponent } from './dsr-reports.component';

describe('DSRReportsComponent', () => {
  let component: DSRReportsComponent;
  let fixture: ComponentFixture<DSRReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSRReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSRReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
