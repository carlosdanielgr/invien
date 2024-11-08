import { Component } from '@angular/core';

import { PropertyFilterComponent } from '@shared/components/property-filter/property-filter.component';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [PropertyFilterComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent {}
