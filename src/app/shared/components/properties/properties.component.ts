import { Component } from '@angular/core';

import { PROPERTIES } from '@shared/property.const';
import { PropertyComponent } from './property/property.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CarouselComponent, PropertyComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent {
  slidesProperties = PROPERTIES;
}
