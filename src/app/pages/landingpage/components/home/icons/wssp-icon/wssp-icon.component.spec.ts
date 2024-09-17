import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsspIconComponent } from './wssp-icon.component';

describe('WsspIconComponent', () => {
  let component: WsspIconComponent;
  let fixture: ComponentFixture<WsspIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WsspIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WsspIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
