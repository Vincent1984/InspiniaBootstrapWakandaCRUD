import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeinfoViewComponent } from './employeeinfo-view.component';

describe('EmployeeinfoViewComponent', () => {
  let component: EmployeeinfoViewComponent;
  let fixture: ComponentFixture<EmployeeinfoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeinfoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeinfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
