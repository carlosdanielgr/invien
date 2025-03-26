import { Component, ViewEncapsulation } from '@angular/core';
import { PropertyDetailComponent } from '../property-detail/property-detail.component';
import { FormComponent } from '../form/form.component';
import { CurrencyPipe } from '@angular/common';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@Component({
  selector: 'app-print-property',
  standalone: true,
  imports: [FormComponent, LoaderComponent, CurrencyPipe],
  templateUrl: './print-property.component.html',
  styleUrl: './print-property.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PrintPropertyComponent extends PropertyDetailComponent {
  constructor() {
    super();
    this.id = this.activatedRoute.snapshot.params['id'];
  }
}
