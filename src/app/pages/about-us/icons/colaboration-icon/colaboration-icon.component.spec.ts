import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaborationIconComponent } from './colaboration-icon.component';

describe('ColaborationIconComponent', () => {
  let component: ColaborationIconComponent;
  let fixture: ComponentFixture<ColaborationIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaborationIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColaborationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
