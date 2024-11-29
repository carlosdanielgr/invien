import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { PropertyComponent } from '@shared/components/carousel-properties/property/property.component';

import { PropertyFilterComponent } from '@shared/components/property-filter/property-filter.component';
import { PropertyService } from '@shared/services/property.service';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [AsyncPipe, PropertyFilterComponent, PropertyComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent {
  constructor(readonly propertyService: PropertyService) {}
}
