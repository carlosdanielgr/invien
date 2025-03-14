import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { QueryFilterProject } from '@shared/interfaces/response.interface';
import { Locations } from '@shared/interfaces/location.interface';
import { FiltersService } from '@shared/services/filters.service';

@Component({
  selector: 'app-project-filter',
  standalone: true,
  imports: [],
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.scss',
})
export class ProjectFilterComponent implements OnInit {
  @Output() newFilter = new EventEmitter<QueryFilterProject>();

  locations: Locations = {
    countries: [],
    states: [],
    towns: [],
  };

  currentFilters: Record<string, string> = {};

  currentFiltersName: Record<string, string> = {
    countryId: $localize`:@@prop-filter-country-select:Ej. Mexico, Estados Unidos`,
    stateId: $localize`:@@prop-filter-state-select:Selecciona un estado`,
    townId: $localize`:@@prop-filter-town-select:Selecciona un municipio`,
  };

  constructor(private readonly filtersService: FiltersService) {}

  ngOnInit() {
    this.getCountries();
  }

  private getCountries() {
    this.filtersService.getCountries().subscribe({
      next: (countries) => {
        this.locations.countries = countries;
      },
    });
  }

  getStates() {
    this.filtersService.getStates(this.currentFilters['countryId']).subscribe({
      next: (states) => {
        this.locations.states = states;
      },
    });
  }

  getTowns() {
    this.filtersService.getTowns(this.currentFilters['stateId']).subscribe({
      next: (towns) => {
        this.locations.towns = towns;
      },
    });
  }

  onSetFilter(key: string, value: string, name: string) {
    this.currentFilters[key] = value;
    this.currentFiltersName[key] = name;
    if (key === 'countryId') this.getStates();
    if (key === 'stateId') this.getTowns();
  }

  onSetFilterPrice(value: string, type: string) {
    this.currentFilters[`${type}Price`] = value;
  }

  onSearch() {
    this.newFilter.emit(this.currentFilters);
  }
}
