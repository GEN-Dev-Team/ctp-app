import { Component, Input } from '@angular/core';
import { MultidisIconComponent } from '../icons/multidis-icon/multidis-icon.component';
import { GestionIconComponent } from '../icons/gestion-icon/gestion-icon.component';
import { CapacitacionIconComponent } from '../icons/capacitacion-icon/capacitacion-icon.component';
import { SoftwareIconComponent } from '../icons/software-icon/software-icon.component';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [
    MultidisIconComponent,
    GestionIconComponent,
    CapacitacionIconComponent,
    SoftwareIconComponent,
  ],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.css',
})
export class ServiceItemComponent {
  @Input() service: any;
}
