import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Filter } from '@shared/interfaces/general.interface';

import { QueryFilter } from '@shared/interfaces/response.interface';
import { FiltersService } from '@shared/services/filters.service';
import { LocationsFilterComponent } from '../locations-filter/locations-filter.component';

@Component({
  selector: 'app-property-filter',
  standalone: true,
  imports: [LocationsFilterComponent],
  templateUrl: './property-filter.component.html',
  styleUrl: './property-filter.component.scss',
})
export class PropertyFilterComponent implements OnInit {
  @Input('isFor') set setIsFor(value: string) {
    this.currentFilters['isFor'] = value;
  }

  @Output() newFilter = new EventEmitter<QueryFilter>();

  isHomePage = this.router.url === '/';

  types: Filter[] = [];

  currentFilters: Record<string, string> = {};

  currentFiltersName: Record<string, string> = {
    typeId: $localize`:@@prop-filter-type-select:Selecciona el tipo de propiedad`,
    Rooms: $localize`:@@prop-filter-rooms-select:Ingrese la cantidad`,
    TotalSize: $localize`:@@prop-filter-total-size-select:Ingrese en m²`,
  };

  constructor(
    private readonly router: Router,
    private readonly filtersService: FiltersService
  ) {}

  ngOnInit() {
    if (this.isHomePage) {
      this.getTypes();
    }
  }

  private getTypes() {
    this.filtersService.getTypes().subscribe({
      next: (types) => {
        this.types = types;
      },
    });
  }

  onSetFilter(key: string, value: string, name: string) {
    this.currentFilters[key] = value;
    this.currentFiltersName[key] = name;
  }

  onSetFilterPrice(value: string, type: string) {
    this.currentFilters[`${type}Price`] = value;
  }

  onSetFilterRange(key: string, min: string) {
    this.currentFilters[`min${key}`] = min;
  }

  onSearch() {
    if (this.isHomePage) {
      this.router.navigate(['/properties'], {
        queryParams: this.currentFilters,
      });
      return;
    }
    this.newFilter.emit(this.currentFilters);
  }
}
