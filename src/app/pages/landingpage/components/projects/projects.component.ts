import { Component } from '@angular/core';
import { BackIconComponent } from './icons/back-icon/back-icon.component';
import { NextIconComponent } from './icons/next-icon/next-icon.component';
import { NgClass } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BackIconComponent, NextIconComponent, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projectList = [
    {
      id: 1,
      title: 'Torre Kyrios',
      description:
        'Edificio Kyrios 25,000 m2 Edificio de Oficinas y Departamentos. 2 torres la 1ra de 37 Pisos + 3 Sótanos la 2da 7 Pisos + 3 Sotanos. Servicios realizados: Planificación colaborativa Implementación Lean Construction Integral, Dirección de Obra -  Terminado La Paz- Bolivia ',
      img_path: 'assets/images/project-imgs/KYRIOS F1.webp',
    },
    {
      id: 2,
      title: 'Torre Hugo',
      description:
        'Torre Hugo, proyecto inmobiliario de departamentos y locales comerciales. Servicios realizados: Implementación de Lean Construction para optimizar flujos de trabajo y reducción de desperdicios, Planificación Integral Colaborativa y supervisión integral. Estado: Terminado La Paz- Bolivia (2024)',
      img_path: 'assets/images/project-imgs/DJI_0011.webp',
    },
    {
      id: 3,
      title: 'Edificio Priscila II',
      description:
        'Edificio Priscila II 13,616 m2 Edificio de Oficinas y Departamentos. 15 Pisos + 5 Sótanos  Servicios realizados: Planificación Colaborativa, Implementación Lean Construction Integral, Modelado y Gestión BIM Estado: Terminado La Paz- Bolivia',
      img_path: 'assets/images/project-imgs/DJI_0700.webp',
    },
    {
      id: 4,
      title: 'Torre Kyrios',
      description:
        'Edificio Kyrios 25,000 m2 Edificio de Oficinas y Departamentos. 2 torres la 1ra de 37 Pisos + 3 Sótanos la 2da 7 Pisos + 3 Sotanos. Servicios realizados: Planificación colaborativa Implementación Lean Construction Integral, Dirección de Obra -  Terminado La Paz- Bolivia ',
      img_path: 'assets/images/project-imgs/KYRIOS F1.webp',
    },
    {
      id: 5,
      title: 'Torre Hugo',
      description:
        'Torre Hugo, proyecto inmobiliario de departamentos y locales comerciales. Servicios realizados: Implementación de Lean Construction para optimizar flujos de trabajo y reducción de desperdicios, Planificación Integral Colaborativa y supervisión integral. Estado: Terminado La Paz- Bolivia (2024)',
      img_path: 'assets/images/project-imgs/DJI_0011.webp',
    },
    {
      id: 6,
      title: 'Edificio Priscila II',
      description:
        'Edificio Priscila II 13,616 m2 Edificio de Oficinas y Departamentos. 15 Pisos + 5 Sótanos  Servicios realizados: Planificación Colaborativa, Implementación Lean Construction Integral, Modelado y Gestión BIM Estado: Terminado La Paz- Bolivia',
      img_path: 'assets/images/project-imgs/DJI_0700.webp',
    },
  ];

  currentIndex = 0;
  gap = 50;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // Observar el tamaño de la pantalla y ajustar el valor de gap
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        if (result.matches) {
          // Si es una pantalla móvil, establece gap en 25
          this.gap = 25;
        } else {
          // Si es desktop, establece gap en 50
          this.gap = 50;
        }
      });
  }

  previousProject() {
    console.log('previous');
    const carousel_content = document.querySelector(
      '.carousel-content'
    ) as HTMLElement;
    const carousel_items = document.querySelectorAll(
      '.project-card'
    ) as NodeListOf<HTMLElement>;

    const itemWidth = carousel_items[0].offsetWidth;

    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = carousel_items.length - 3;
    }

    carousel_content.style.transform = `translateX(-${
      (itemWidth + this.gap) * this.currentIndex
    }px)`;
  }

  nextProject() {
    const carousel_content = document.querySelector(
      '.carousel-content'
    ) as HTMLElement;
    const carousel_items = document.querySelectorAll(
      '.project-card'
    ) as NodeListOf<HTMLElement>;

    const itemWidth = carousel_items[0].offsetWidth;

    this.currentIndex++;

    if (this.currentIndex >= carousel_items.length - 2) {
      this.currentIndex = 0;
    }

    carousel_content.style.transform = `translateX(-${
      (itemWidth + this.gap) * this.currentIndex
    }px)`;
  }
}
