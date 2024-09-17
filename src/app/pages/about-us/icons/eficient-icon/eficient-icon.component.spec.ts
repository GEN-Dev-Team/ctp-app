import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EficientIconComponent } from './eficient-icon.component';

describe('EficientIconComponent', () => {
  let component: EficientIconComponent;
  let fixture: ComponentFixture<EficientIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EficientIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EficientIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
