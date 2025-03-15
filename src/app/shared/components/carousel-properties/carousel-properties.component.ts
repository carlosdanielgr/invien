import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PropertyService } from '@shared/services/property.service';
import { Property } from '@shared/interfaces/property.interface';
import { splitArray } from '@shared/functions';
import { NoDataComponent } from '../no-data/no-data.component';
import { PropertyComponent } from '../property/property.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { PropertySkeletonComponent } from '../property-skeleton/property-skeleton.component';

@Component({
  selector: 'app-carousel-properties',
  standalone: true,
  imports: [
    CarouselComponent,
    PropertyComponent,
    PropertySkeletonComponent,
    NoDataComponent,
  ],
  templateUrl: './carousel-properties.component.html',
  styleUrl: './carousel-properties.component.scss',
})
export class CarouselPropertiesComponent implements OnInit, OnDestroy {
  matrixProperties: Property[][] = [];

  subscription$ = new Subscription();

  isWeb = window.innerWidth > 992;

  title = $localize`:@@car-prop-title:COMIENZA A INVERTIR`;

  noProperties = $localize`:@@no-properties:No hay propiedades disponibles`;

  subtitle = 'Propiedades Inmobiliarias';

  constructor(readonly propertyService: PropertyService) {}

  ngOnInit(): void {
    this.subscription$ = this.propertyService.properties$.subscribe({
      next: (properties) => {
        this.matrixProperties = splitArray<Property>(
          this.isWeb ? 3 : 1,
          properties
        );
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
