import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultidisIconComponent } from './multidis-icon.component';

describe('MultidisIconComponent', () => {
  let component: MultidisIconComponent;
  let fixture: ComponentFixture<MultidisIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultidisIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultidisIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
