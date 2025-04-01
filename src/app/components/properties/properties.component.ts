import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PropertyComponent } from '@shared/components/property/property.component';
import { PropertyFilterComponent } from '@shared/components/property-filter/property-filter.component';
import { PropertySkeletonComponent } from '@shared/components/property-skeleton/property-skeleton.component';
import { PropertyService } from '@shared/services/property.service';
import { Property } from '@shared/interfaces/property.interface';
import { NoDataComponent } from '@shared/components/no-data/no-data.component';
import { Pagination, QueryFilter } from '@shared/interfaces/response.interface';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    PropertyFilterComponent,
    PropertyComponent,
    PropertySkeletonComponent,
    PaginationComponent,
    NoDataComponent,
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent implements OnInit {
  properties: Property[] = [];

  pagination!: Pagination;

  loading = false;

  urlParams = this.activatedRoute.snapshot.queryParams;

  noProperties = $localize`:@@no-properties:No hay propiedades disponibles`;

  constructor(
    private readonly propertyService: PropertyService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.onGetProperties({
      page: 1,
    });
  }

  onGetProperties(params: QueryFilter): void {
    const element = document.getElementById('props-init');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.loading = true;
    this.propertyService
      .getPropertiesPaginate({
        page: this.pagination?.page,
        ...this.urlParams,
        ...params,
      })
      .subscribe({
        next: (response) => {
          const { data, ...pagination } = response;
          this.properties = data;
          if (!this.pagination) this.pagination = pagination;
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
        },
      });
  }
}
