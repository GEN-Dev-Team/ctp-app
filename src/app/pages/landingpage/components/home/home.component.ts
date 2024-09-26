import { Component } from '@angular/core';
import { HomeCardComponent } from './home-card/home-card.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WsspIconComponent } from './icons/wssp-icon/wssp-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardComponent, RouterLink, RouterOutlet, WsspIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeCardList = [
    {
      id: 1,
      value: 3,
      text: 'Años de experiencia',
    },

    {
      id: 2,
      value: 120000,
      text: 'm2 Gestionados',
    },

    {
      id: 3,
      value: 10,
      text: 'Proyectos desarrollados',
    },
  ];
}
