import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Filter } from '@shared/interfaces/general.interface';

import { Locations } from '@shared/interfaces/location.interface';
import { QueryFilter } from '@shared/interfaces/response.interface';
import { FiltersService } from '@shared/services/filters.service';

@Component({
  selector: 'app-property-filter',
  standalone: true,
  imports: [],
  templateUrl: './property-filter.component.html',
  styleUrl: './property-filter.component.scss',
})
export class PropertyFilterComponent implements OnInit {
  @Output() newFilter = new EventEmitter<QueryFilter>();

  isHomePage = this.router.url === '/';

  locations: Locations = {
    countries: [],
    states: [],
    towns: [],
  };

  types: Filter[] = [];

  currentFilters: Record<string, string> = {};

  currentFiltersName: Record<string, string> = {
    typeId: $localize`:@@prop-filter-type-select:Selecciona el tipo de propiedad`,
    countryId: $localize`:@@prop-filter-country-select:Ej. Mexico, Estados Unidos`,
    stateId: $localize`:@@prop-filter-state-select:Selecciona un estado`,
    townId: $localize`:@@prop-filter-town-select:Selecciona un municipio`,
    Price: $localize`:@@prop-filter-price-select:Selecciona el rango de precio`,
    Rooms: $localize`:@@prop-filter-rooms-select:Seleccione la cantidad`,
    TotalSize: $localize`:@@prop-filter-total-size-select:Selecciona el tamaño`,
  };

  constructor(
    private readonly router: Router,
    private readonly filtersService: FiltersService,
  ) {}

  ngOnInit() {
    if (this.isHomePage) {
      this.getLocations();
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

  private getLocations() {
    this.filtersService.getLocations().subscribe({
      next: (locations) => {
        this.locations = locations;
      },
    });
  }

  onSetFilter(key: string, value: string, name: string) {
    this.currentFilters[key] = value;
    this.currentFiltersName[key] = name;
  }

  onSetFilterRange(key: string, min: string, max: string, name: string) {
    this.currentFilters[`max${key}`] = max;
    this.currentFilters[`min${key}`] = min;
    this.currentFiltersName[key] = name;
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
