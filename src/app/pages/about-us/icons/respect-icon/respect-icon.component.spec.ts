import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectIconComponent } from './respect-icon.component';

describe('RespectIconComponent', () => {
  let component: RespectIconComponent;
  let fixture: ComponentFixture<RespectIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespectIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespectIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
