import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionIconComponent } from './capacitacion-icon.component';

describe('CapacitacionIconComponent', () => {
  let component: CapacitacionIconComponent;
  let fixture: ComponentFixture<CapacitacionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapacitacionIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapacitacionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
