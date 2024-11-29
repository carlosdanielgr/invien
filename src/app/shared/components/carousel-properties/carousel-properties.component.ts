import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PropertyService } from '@shared/services/property.service';
import { Property } from '@shared/interfaces/property.interface';
import { splitArray } from '@shared/functions';
import { PropertyComponent } from '../carousel-properties/property/property.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-carousel-properties',
  standalone: true,
  imports: [CarouselComponent, PropertyComponent],
  templateUrl: './carousel-properties.component.html',
  styleUrl: './carousel-properties.component.scss',
})
export class CarouselPropertiesComponent implements OnInit, OnDestroy {
  matrixProperties: Property[][] = [];

  subscription$ = new Subscription();

  constructor(private readonly propertyService: PropertyService) {}

  ngOnInit(): void {
    this.subscription$ = this.propertyService.properties$.subscribe({
      next: (properties) => {
        this.matrixProperties = splitArray<Property>(
          window.innerWidth > 992 ? 3 : 1,
          properties
        );
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
