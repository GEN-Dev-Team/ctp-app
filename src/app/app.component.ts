import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/layouts/header/header.component';
import { FooterComponent } from './shared/components/layouts/footer/footer.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
``;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LandingpageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ctp-app';
}
