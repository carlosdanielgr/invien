import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { environment } from '@env/environment';
import { Project } from '@shared/interfaces/project.interface';
import { LocaleService } from '@shared/services/locale.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() project!: Project;

  @Input() showPrice = true;

  apiUrl = `${environment.apiUrl}uploads/images-projects/`;

  constructor(
    private readonly router: Router,
    readonly localeService: LocaleService
  ) {}

  redirectProject() {
    if (this.showPrice) this.router.navigate(['/projects', this.project.id]);
  }
}
