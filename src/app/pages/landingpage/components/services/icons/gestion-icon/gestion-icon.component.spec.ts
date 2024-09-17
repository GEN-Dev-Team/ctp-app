import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionIconComponent } from './gestion-icon.component';

describe('GestionIconComponent', () => {
  let component: GestionIconComponent;
  let fixture: ComponentFixture<GestionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
