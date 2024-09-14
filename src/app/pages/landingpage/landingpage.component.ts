import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ClientsAlliesComponent } from './components/clients-allies/clients-allies.component';
import { MapComponent } from './components/map/map.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    HomeComponent,
    ServicesComponent,
    ProjectsComponent,
    ClientsAlliesComponent,
    MapComponent,
    ContactComponent,
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
})
export class LandingpageComponent {}
