import { Component } from '@angular/core';

import { CarouselPropertiesComponent } from '@shared/components/carousel-properties/carousel-properties.component';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CarouselPropertiesComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent {}
