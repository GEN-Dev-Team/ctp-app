import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunctualityIconComponent } from './punctuality-icon.component';

describe('PunctualityIconComponent', () => {
  let component: PunctualityIconComponent;
  let fixture: ComponentFixture<PunctualityIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunctualityIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PunctualityIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
