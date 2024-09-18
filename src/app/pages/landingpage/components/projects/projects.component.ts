import { Component } from '@angular/core';
import { BackIconComponent } from './icons/back-icon/back-icon.component';
import { NextIconComponent } from './icons/next-icon/next-icon.component';
import { NgClass } from '@angular/common';

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
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas Lorem Ipsum es simplemente el texto de relleno de las imprentas texto de relleno ',
      img_path: 'assets/images/project-imgs/KYRIOS F1.webp',
    },
    {
      id: 2,
      title: 'Torre Hugo',
      description:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas Lorem Ipsum es simplemente el texto de relleno de las imprentas texto de relleno ',
      img_path: 'assets/images/project-imgs/DJI_0011.webp',
    },
    {
      id: 3,
      title: 'Edificio Priscila II',
      description:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas Lorem Ipsum es simplemente el texto de relleno de las imprentas texto de relleno ',
      img_path: 'assets/images/project-imgs/DJI_0700.webp',
    },
    {
      id: 4,
      title: 'Torre Kyrios',
      description:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas Lorem Ipsum es simplemente el texto de relleno de las imprentas texto de relleno ',
      img_path: 'assets/images/project-imgs/KYRIOS F1.webp',
    },
    {
      id: 5,
      title: 'Torre Hugo',
      description:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas Lorem Ipsum es simplemente el texto de relleno de las imprentas texto de relleno ',
      img_path: 'assets/images/project-imgs/DJI_0011.webp',
    },
    {
      id: 6,
      title: 'Edificio Priscila II',
      description:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas Lorem Ipsum es simplemente el texto de relleno de las imprentas texto de relleno ',
      img_path: 'assets/images/project-imgs/DJI_0700.webp',
    },
  ];

  currentIndex = 0;
  gap = 50;

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
