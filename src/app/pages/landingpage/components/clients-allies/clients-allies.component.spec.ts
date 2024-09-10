import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAlliesComponent } from './clients-allies.component';

describe('ClientsAlliesComponent', () => {
  let component: ClientsAlliesComponent;
  let fixture: ComponentFixture<ClientsAlliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsAlliesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsAlliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
