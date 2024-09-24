import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;

  currentLanguage: string = 'ES';
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(language: string) {
    const spanishButton = document.getElementById(
      'spanish-button'
    ) as HTMLAnchorElement;
    const englishButton = document.getElementById(
      'english-button'
    ) as HTMLAnchorElement;

    if (language === 'ES') {
      spanishButton.classList.add('active');
      englishButton.classList.remove('active');
    } else {
      englishButton.classList.add('active');
      spanishButton.classList.remove('active');
    }

    this.change(language);
  }

  change = async (language: string) => {
    const requestJson = await fetch(`/assets/languages/${language}.json`);
    const texts = await requestJson.json();

    const textsToChange = Array.from(
      document.querySelectorAll('[data-section]')
    );

    for (const textToChange of textsToChange) {
      const section = textToChange.getAttribute('data-section');
      const value = textToChange.getAttribute('data-value');

      textToChange.innerHTML = texts[section!][value!];
    }
  };
}
