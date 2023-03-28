import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDsrComponent } from './update-dsr.component';

describe('UpdateDsrComponent', () => {
  let component: UpdateDsrComponent;
  let fixture: ComponentFixture<UpdateDsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDsrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
