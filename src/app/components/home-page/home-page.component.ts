import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

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
    RouterLink,
    PropertyFilterComponent,
    CarouselComponent,
    AdviserComponent,
    CommentsComponent,
    CarouselPropertiesComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;

  // @HostListener('document:click', ['$event'])
  // onClick(): void {
  //   // if (this.video) this.video.nativeElement.play();
  // }

  slidesAdvisers = ADVISERS;

  constructor() {}

  ngAfterViewInit(): void {
    this.video.nativeElement.muted = true;
    this.video.nativeElement.play();
  }
}
