import { Component } from '@angular/core';

import { ADVISERS } from '@shared/adviser.const';
import { AdviserComponent } from '@shared/components/adviser/adviser.component';
import { CarouselPropertiesComponent } from '@shared/components/carousel-properties/carousel-properties.component';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { CommentsComponent } from '@shared/components/comments/comments.component';
import { PropertyFilterComponent } from '@shared/components/property-filter/property-filter.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    PropertyFilterComponent,
    CarouselComponent,
    AdviserComponent,
    CommentsComponent,
    CarouselPropertiesComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  slidesAdvisers = ADVISERS;
}
