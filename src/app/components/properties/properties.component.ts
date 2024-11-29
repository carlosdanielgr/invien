import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { PropertyComponent } from '@shared/components/property/property.component';

import { PropertyFilterComponent } from '@shared/components/property-filter/property-filter.component';
import { PropertySkeletonComponent } from '@shared/components/property-skeleton/property-skeleton.component';
import { PropertyService } from '@shared/services/property.service';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    AsyncPipe,
    PropertyFilterComponent,
    PropertyComponent,
    PropertySkeletonComponent,
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent {
  constructor(readonly propertyService: PropertyService) {}
}
