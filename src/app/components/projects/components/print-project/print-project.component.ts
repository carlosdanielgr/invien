import { CurrencyPipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

import { LoaderComponent } from '@shared/components/loader/loader.component';
import { FormComponent } from '../form/form.component';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-print-project',
  standalone: true,
  imports: [FormComponent, LoaderComponent, CurrencyPipe],
  templateUrl: './print-project.component.html',
  styleUrl: './print-project.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PrintProjectComponent extends ProjectDetailComponent {
  constructor() {
    super();
    this.id = this.activatedRoute.snapshot.params['id'];
  }
}
