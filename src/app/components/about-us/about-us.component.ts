import { Component } from '@angular/core';

import { CarouselPropertiesComponent } from '@shared/components/carousel-properties/carousel-properties.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CarouselPropertiesComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {}
