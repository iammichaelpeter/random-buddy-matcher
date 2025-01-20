import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePairingComponent } from './employee-pairing.component';

describe('EmployeePairingComponent', () => {
  let component: EmployeePairingComponent;
  let fixture: ComponentFixture<EmployeePairingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeePairingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
