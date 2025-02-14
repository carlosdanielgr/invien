import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '@env/environment';
import { Property } from '@shared/interfaces/property.interface';
import { LocaleService } from '@shared/services/locale.service';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss',
})
export class PropertyComponent {
  @Input() property!: Property;

  apiUrl = `${environment.apiUrl}uploads/images/`;

  constructor(
    private readonly router: Router,
    readonly localeService: LocaleService,
  ) {}

  redirectProperty() {
    this.router.navigate(['/properties', this.property.id]);
  }
}
