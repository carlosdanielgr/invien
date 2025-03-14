import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '@env/environment';
import { Project } from '@shared/interfaces/project.interface';
import { LocaleService } from '@shared/services/locale.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() project!: Project;

  apiUrl = `${environment.apiUrl}uploads/images-projects/`;

  constructor(
    private readonly router: Router,
    readonly localeService: LocaleService
  ) {}

  redirectProject() {
    this.router.navigate(['/projects', this.project.id]);
  }
}
