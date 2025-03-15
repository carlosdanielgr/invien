import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '@env/environment';
import { CarouselPropertiesComponent } from '@shared/components/carousel-properties/carousel-properties.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { CurrencyPipe } from '@angular/common';
import { LocaleService } from '@shared/services/locale.service';
import { Project } from '@shared/interfaces/project.interface';
import { ProjectService } from '@shared/services/project.service';
import { FormComponent } from '@shared/components/form/form.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    CarouselPropertiesComponent,
    LoaderComponent,
    CurrencyPipe,
    FormComponent,
  ],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  project!: Project;

  apiUrl = `${environment.apiUrl}uploads/images-projects/`;

  loading = true;

  id = '';
  readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly router: Router = inject(Router);
  readonly sanitizer: DomSanitizer = inject(DomSanitizer);
  readonly projectService: ProjectService = inject(ProjectService);
  readonly localeService: LocaleService = inject(LocaleService);

  constructor() {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.listenRouteChange();
  }

  private listenRouteChange(): void {
    this.activatedRoute.params.subscribe({
      next: ({ id }) => {
        this.id = id;
        this.getProject();
      },
    });
  }

  private getProject(): void {
    this.projectService.getProjectById(this.id).subscribe({
      next: (response) => {
        this.project = response.data;
        this.sanitizerUrl();
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/projects']);
        this.loading = false;
      },
    });
  }

  private sanitizerUrl() {
    if (this.project.url_video)
      this.project.url_video = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.project.url_video
      ) as string;
    this.project.url_map = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.project.url_map
    ) as string;
  }
}
