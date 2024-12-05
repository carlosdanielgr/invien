import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { environment } from '@env/environment';
import { Filter } from '@shared/interfaces/general.interface';
import { Locations } from '@shared/interfaces/location.interface';
import { LocaleService } from './locale.service';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private readonly API_URL_PROPERTY = `${environment.apiUrl}property/`;

  private readonly API_URL_FILTER = `${environment.apiUrl}location/`;

  constructor(
    private readonly http: HttpClient,
    private readonly locale: LocaleService,
  ) {}

  getLocations() {
    return this.http.get<Locations>(this.API_URL_FILTER).pipe(
      map((locations) => {
        locations.countries = locations.countries.map((country) => {
          return {
            ...country,
            name: country[`country_${this.locale.current}` as keyof Filter],
          };
        });
        locations.states = locations.states.map((state) => {
          return {
            ...state,
            name: state[`state_${this.locale.current}` as keyof Filter],
          };
        });
        locations.towns = locations.towns.map((town) => {
          return {
            ...town,
            name: town[`town_${this.locale.current}` as keyof Filter],
          };
        });
        return locations;
      }),
    );
  }

  getTypes() {
    return this.http.get<Filter[]>(`${this.API_URL_PROPERTY}types`).pipe(
      map((types) => {
        return types.map((type) => {
          return {
            ...type,
            name: type[`type_${this.locale.current}` as keyof Filter],
          };
        });
      }),
    );
  }
}
