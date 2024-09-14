import { Component } from '@angular/core';
import { BackIconComponent } from './icons/back-icon/back-icon.component';
import { NextIconComponent } from './icons/next-icon/next-icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BackIconComponent, NextIconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projectList = [
    {
      id: 1,
      img_path:
        'https://cdn.ome.lt/ogJ2twPi5Nnx-agzlJddOC0s3sQ=/1200x630/smart/extras/conteudos/jujutsu_kaVqhL3.jpg',
    },
    {
      id: 2,
      img_path:
        'https://cdn.ome.lt/ogJ2twPi5Nnx-agzlJddOC0s3sQ=/1200x630/smart/extras/conteudos/jujutsu_kaVqhL3.jpg',
    },
    {
      id: 3,
      img_path:
        'https://cdn.ome.lt/ogJ2twPi5Nnx-agzlJddOC0s3sQ=/1200x630/smart/extras/conteudos/jujutsu_kaVqhL3.jpg',
    },
    {
      id: 4,
      img_path:
        'https://cdn.ome.lt/ogJ2twPi5Nnx-agzlJddOC0s3sQ=/1200x630/smart/extras/conteudos/jujutsu_kaVqhL3.jpg',
    },
    {
      id: 5,
      img_path:
        'https://cdn.ome.lt/ogJ2twPi5Nnx-agzlJddOC0s3sQ=/1200x630/smart/extras/conteudos/jujutsu_kaVqhL3.jpg',
    },
    {
      id: 6,
      img_path:
        'https://cdn.ome.lt/ogJ2twPi5Nnx-agzlJddOC0s3sQ=/1200x630/smart/extras/conteudos/jujutsu_kaVqhL3.jpg',
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
      '.project-img'
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
      '.project-img'
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
