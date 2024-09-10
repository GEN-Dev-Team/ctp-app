import { Component } from '@angular/core';
import { HomeCardComponent } from './home-card/home-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeCardList = [
    {
      id: 1,
      value: 10,
      text: 'Años de experiencia',
    },

    {
      id: 2,
      value: 20,
      text: 'Servicios',
    },

    {
      id: 3,
      value: 200,
      text: 'Proyectos',
    },
  ];
}
