import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@env/environment';
import { Locations } from '@shared/interfaces/location.interface';
import { Type } from '@shared/interfaces/property.interface';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private readonly API_URL_PROPERTY = `${environment.apiUrl}property/`;

  private readonly API_URL_FILTER = `${environment.apiUrl}location/`;

  constructor(private readonly http: HttpClient) {}

  getLocations() {
    return this.http.get<Locations>(this.API_URL_FILTER);
  }

  getTypes() {
    return this.http.get<Type[]>(`${this.API_URL_PROPERTY}types`);
  }
}
