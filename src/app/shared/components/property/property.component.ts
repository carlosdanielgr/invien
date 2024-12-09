import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '@env/environment';
import { Property } from '@shared/interfaces/property.interface';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss',
})
export class PropertyComponent {
  @Input() property!: Property;

  apiUrl = `${environment.apiUrl}uploads/images/`;

  constructor(private readonly router: Router) {}

  redirectProperty() {
    this.router.navigate(['/properties', this.property.id]);
  }
}
