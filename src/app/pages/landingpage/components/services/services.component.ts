import { Component } from '@angular/core';
import { ServiceItemComponent } from './service-item/service-item.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceItemComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  serviceList = [
    {
      id: 1,
      title: 'Consultoria multidisciplinaria de Ingeniería',
    },
    {
      id: 2,
      title: 'Consultoría Gerencia y Gestión de Proyectos',
    },
    {
      id: 3,
      title: 'Capacitación a Empresas',
    },
    {
      id: 4,
      title: 'Software de Costo SURI',
    },
  ];
}
