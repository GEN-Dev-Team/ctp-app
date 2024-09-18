import { Component } from '@angular/core';
import { EficientIconComponent } from './icons/eficient-icon/eficient-icon.component';
import { ColaborationIconComponent } from './icons/colaboration-icon/colaboration-icon.component';
import { RespectIconComponent } from './icons/respect-icon/respect-icon.component';
import { PunctualityIconComponent } from './icons/punctuality-icon/punctuality-icon.component';
import { OrganizationIconComponent } from './icons/organization-icon/organization-icon.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    EficientIconComponent,
    ColaborationIconComponent,
    RespectIconComponent,
    PunctualityIconComponent,
    OrganizationIconComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  valueList = [
    {
      id: 1,
      title: 'Respeto',
      description: 'Valoramos cada opinión y contribución',
    },
    {
      id: 2,
      title: 'Organización',
      description: 'Cada detalle cuenta para un resultado impecable',
    },
    {
      id: 3,
      title: 'Colaboración',
      description: 'El trabajo en equipo multiplica nuestros logros',
    },
    {
      id: 4,
      title: 'Eficiencia',
      description: 'Optimizamos cada paso para el máximo impacto',
    },
    {
      id: 5,
      title: 'Puntualidad',
      description: 'Refleja nuestro compromiso y seriedad',
    },
  ];
}
