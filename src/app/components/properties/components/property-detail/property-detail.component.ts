import { Component } from '@angular/core';

import { CarouselPropertiesComponent } from '@shared/components/carousel-properties/carousel-properties.component';
import { FormComponent } from '../../../form/form.component';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [FormComponent, CarouselPropertiesComponent],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.scss',
})
export class PropertyDetailComponent {}
