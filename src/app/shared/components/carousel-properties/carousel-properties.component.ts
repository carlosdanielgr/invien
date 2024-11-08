import { Component } from '@angular/core';
import { PROPERTIES } from '@shared/property.const';
import { PropertyComponent } from '../carousel-properties/property/property.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-carousel-properties',
  standalone: true,
  imports: [CarouselComponent, PropertyComponent],
  templateUrl: './carousel-properties.component.html',
  styleUrl: './carousel-properties.component.scss',
})
export class CarouselPropertiesComponent {
  slidesProperties = PROPERTIES;
}
