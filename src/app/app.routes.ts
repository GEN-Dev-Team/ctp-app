import { Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    title: 'CTP Consultores',
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'CTP Consultores',
  },
];
