import { Component } from '@angular/core';

import { AdviserComponent } from '@shared/components/adviser/adviser.component';
import { CarouselPropertiesComponent } from '@shared/components/carousel-properties/carousel-properties.component';
import { CommentsComponent } from '@shared/components/comments/comments.component';
import * as advisors from './../../../assets/advisors.json';

@Component({
  selector: 'app-advisers',
  standalone: true,
  imports: [AdviserComponent, CommentsComponent, CarouselPropertiesComponent],
  templateUrl: './advisers.component.html',
  styleUrl: './advisers.component.scss',
})
export class AdvisersComponent {
  advisers = advisors.data;
}
