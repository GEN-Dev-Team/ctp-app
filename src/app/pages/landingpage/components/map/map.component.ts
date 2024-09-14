import { Component } from '@angular/core';
import { SelectIconComponent } from './icons/select-icon/select-icon.component';
import { LocationIconComponent } from './icons/location-icon/location-icon.component';
import { CaretRightIconComponent } from './icons/caret-right-icon/caret-right-icon.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    SelectIconComponent,
    LocationIconComponent,
    CaretRightIconComponent,
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {}
