import { Component, OnInit } from '@angular/core';

import { PropertyComponent } from '@shared/components/property/property.component';
import { PropertyFilterComponent } from '@shared/components/property-filter/property-filter.component';
import { PropertySkeletonComponent } from '@shared/components/property-skeleton/property-skeleton.component';
import { PropertyService } from '@shared/services/property.service';
import { Property } from '@shared/interfaces/property.interface';
import {
  Pagination,
  QueryPagination,
} from '@shared/interfaces/response.interface';
import { PaginationComponent } from './components/pagination/pagination.component';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    PropertyFilterComponent,
    PropertyComponent,
    PropertySkeletonComponent,
    PaginationComponent,
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent implements OnInit {
  properties: Property[] = [];

  pagination!: Pagination;

  loading = false;

  constructor(private readonly propertyService: PropertyService) {}

  ngOnInit(): void {
    this.onGetProperties({ page: 1 });
  }

  onGetProperties(params: QueryPagination): void {
    this.loading = true;
    this.propertyService.getPropertiesPaginate(params).subscribe({
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
