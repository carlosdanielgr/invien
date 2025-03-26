import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PropertySkeletonComponent } from '@shared/components/property-skeleton/property-skeleton.component';
import { NoDataComponent } from '@shared/components/no-data/no-data.component';
import { Pagination, QueryFilter } from '@shared/interfaces/response.interface';
import { ProjectService } from '@shared/services/project.service';
import { ProjectFilterComponent } from './components/project-filter/project-filter.component';
import { Project } from '@shared/interfaces/project.interface';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { ProjectComponent } from './components/project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectFilterComponent,
    ProjectComponent,
    PropertySkeletonComponent,
    PaginationComponent,
    NoDataComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  pagination!: Pagination;

  loading = false;

  urlParams = this.activatedRoute.snapshot.queryParams;

  noProjects = $localize`:@@no-projects:No hay proyectos disponibles`;

  constructor(
    private readonly projectService: ProjectService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onGetProjects({
      page: 1,
    });
  }

  onGetProjects(params: QueryFilter): void {
    this.loading = true;
    this.projectService
      .getProjectsPaginate({
        page: this.pagination?.page,
        ...this.urlParams,
        ...params,
      })
      .subscribe({
        next: (response) => {
          const { data, ...pagination } = response;
          this.projects = data;
          if (!this.pagination) this.pagination = pagination;
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
        },
      });
  }
}
