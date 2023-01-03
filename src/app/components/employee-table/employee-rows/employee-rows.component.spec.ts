import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRowsComponent } from './employee-rows.component';

describe('EmployeeRowsComponent', () => {
  let component: EmployeeRowsComponent;
  let fixture: ComponentFixture<EmployeeRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
