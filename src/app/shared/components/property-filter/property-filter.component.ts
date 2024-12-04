import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Locations } from '@shared/interfaces/location.interface';
import { Type } from '@shared/interfaces/property.interface';
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

  types: Type[] = [];

  currentFilters: Record<string, string> = {};

  currentFiltersName: Record<string, string> = {};

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
