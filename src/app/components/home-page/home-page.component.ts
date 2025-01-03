import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { AdviserComponent } from '@shared/components/adviser/adviser.component';
import { CarouselPropertiesComponent } from '@shared/components/carousel-properties/carousel-properties.component';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { CommentsComponent } from '@shared/components/comments/comments.component';
import { PropertyFilterComponent } from '@shared/components/property-filter/property-filter.component';
import { splitArray } from '@shared/functions';
import { Advisor } from '@shared/interfaces/advisor.interface';
import * as advisors from './../../../assets/advisors.json';

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
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;

  // @HostListener('document:click', ['$event'])
  // onClick(): void {
  //   // if (this.video) this.video.nativeElement.play();
  // }

  slidesAdvisers: Advisor[][] = [];

  advisorTitle = $localize`:@@advisors-title:CONOCE AL EQUIPO`;

  advisorSubtitle = $localize`:@@advisors-subtitle:Tu Propiedad en las Mejores Manos`;

  isFor = 'sale';

  constructor() {}

  ngOnInit(): void {
    this.slidesAdvisers = splitArray<Advisor>(
      window.innerWidth > 992 ? 3 : 1,
      advisors.data,
    );
  }

  ngAfterViewInit(): void {
    this.video.nativeElement.muted = true;
    this.video.nativeElement.play();
  }

  toggleTab(isFor: string): void {
    this.isFor = isFor;
  }
}
