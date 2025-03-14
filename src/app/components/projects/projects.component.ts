import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PropertyComponent } from '@shared/components/property/property.component';
import { PropertySkeletonComponent } from '@shared/components/property-skeleton/property-skeleton.component';
import { Property } from '@shared/interfaces/property.interface';
import { NoDataComponent } from '@shared/components/no-data/no-data.component';
import { Pagination, QueryFilter } from '@shared/interfaces/response.interface';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProjectService } from '@shared/services/project.service';
import { ProjectFilterComponent } from './components/project-filter/project-filter.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectFilterComponent,
    PropertyComponent,
    PropertySkeletonComponent,
    PaginationComponent,
    NoDataComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  properties: Property[] = [];

  pagination!: Pagination;

  loading = false;

  urlParams = this.activatedRoute.snapshot.queryParams;

  noProperties = $localize`:@@no-projects:No hay proyectos disponibles`;

  constructor(
    private readonly propertyService: ProjectService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onGetProperties({
      page: 1,
    });
  }

  onGetProperties(params: QueryFilter): void {
    // this.loading = true;
    // this.propertyService
    //   .getPropertiesPaginate({
    //     page: this.pagination?.page,
    //     ...this.urlParams,
    //     ...params,
    //   })
    //   .subscribe({
    //     next: (response) => {
    //       const { data, ...pagination } = response;
    //       this.properties = data;
    //       if (!this.pagination) this.pagination = pagination;
    //       this.loading = false;
    //     },
    //     error: (error) => {
    //       this.loading = false;
    //     },
    //   });
  }
}
