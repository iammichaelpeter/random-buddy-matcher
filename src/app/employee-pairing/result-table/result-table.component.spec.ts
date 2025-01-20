import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReslutTableComponent } from './result-table.component';

describe('ReslutTableComponent', () => {
  let component: ReslutTableComponent;
  let fixture: ComponentFixture<ReslutTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReslutTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReslutTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
