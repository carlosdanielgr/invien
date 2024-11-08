import { Component } from '@angular/core';
import { PropertyComponent } from '@shared/components/carousel-properties/property/property.component';

import { PropertyFilterComponent } from '@shared/components/property-filter/property-filter.component';
import { ORIGINAL_PROPERTIES } from '@shared/property.const';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [PropertyFilterComponent, PropertyComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent {
  properties = ORIGINAL_PROPERTIES;
}
