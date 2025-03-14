import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { QueryFilterProject } from '@shared/interfaces/response.interface';
import { Locations } from '@shared/interfaces/location.interface';
import { FiltersService } from '@shared/services/filters.service';
import { AutocompleteComponent } from '@shared/components/autocomplete/autocomplete.component';

@Component({
  selector: 'app-project-filter',
  standalone: true,
  imports: [AutocompleteComponent],
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

  countryNames: string[] = [];

  stateNames: string[] = [];

  townNames: string[] = [];

  currentFilters: Record<string, any> = {};

  currentFiltersName: Record<string, string> = {
    countryId: $localize`:@@prop-filter-country-select:Ej. Mexico, Estados Unidos`,
    stateId: $localize`:@@prop-filter-state-select:Selecciona un estado`,
    townId: $localize`:@@prop-filter-town-select:Selecciona un municipio`,
    country: $localize`:@@country:País`,
    state: $localize`:@@state:Estado`,
    town: $localize`:@@town:Municipio`,
  };

  constructor(private readonly filtersService: FiltersService) {}

  ngOnInit() {
    this.getCountries();
  }

  private getCountries() {
    this.filtersService.getCountries().subscribe({
      next: (res) => {
        this.locations.countries = res;
        this.countryNames = res.map((country) => country.name);
      },
    });
  }

  getStateByCountry(country: string): void {
    this.currentFilters['countryId'] = this.locations.countries.find(
      (c) => c.name === country
    )?.id;
    if (this.currentFilters['countryId']) {
      this.filtersService
        .getStates(this.currentFilters['countryId'])
        .subscribe({
          next: (res) => {
            this.locations.states = res;
            this.stateNames = res.map((state) => state.name);
          },
        });
    }
  }

  getTownByState(state: string): void {
    this.currentFilters['stateId'] = this.locations.states.find(
      (s) => s.name === state
    )?.id;
    if (this.currentFilters['stateId']) {
      this.filtersService.getTowns(this.currentFilters['stateId']).subscribe({
        next: (res) => {
          this.locations.towns = res;
          this.townNames = res.map((town) => town.name);
        },
      });
    }
  }

  setTown(town: string): void {
    this.currentFilters['townId'] = this.locations.towns.find(
      (t) => t.name === town
    )?.id;
  }

  onSetFilterPrice(value: string, type: string) {
    this.currentFilters[`${type}Price`] = value;
  }

  onSearch() {
    this.newFilter.emit(this.currentFilters);
  }
}
