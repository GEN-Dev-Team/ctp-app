import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareIconComponent } from './software-icon.component';

describe('SoftwareIconComponent', () => {
  let component: SoftwareIconComponent;
  let fixture: ComponentFixture<SoftwareIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
