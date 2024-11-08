import { Component } from '@angular/core';

import { ADVISERS } from '@shared/adviser.const';
import { AdviserComponent } from '@shared/components/adviser/adviser.component';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { PropertiesComponent } from '@shared/components/properties/properties.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CarouselComponent, AdviserComponent, PropertiesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  slidesAdvisers = ADVISERS;
}
