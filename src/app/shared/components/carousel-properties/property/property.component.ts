import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Property } from '@shared/interfaces/property.interface';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss',
})
export class PropertyComponent {
  @Input() property: Partial<Property> = {};

  @Input() info: string = '';

  constructor(private readonly router: Router) {}

  redirectProperty() {
    this.router.navigate(['/properties', 1]);
  }
}
