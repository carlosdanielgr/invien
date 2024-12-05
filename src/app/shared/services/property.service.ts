import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@env/environment';
import { Property } from '@shared/interfaces/property.interface';
import {
  Pagination,
  QueryFilter,
  Response,
} from '@shared/interfaces/response.interface';
import { Filter } from '@shared/interfaces/general.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { LocaleService } from './locale.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private readonly API_URL = `${environment.apiUrl}property/`;

  private originProperties$ = new BehaviorSubject<Property[]>([]);

  pagination!: Pagination;

  loading = false;

  constructor(
    private readonly http: HttpClient,
    private readonly locale: LocaleService,
  ) {}

  getProperties() {
    return this.http.get<Response<Property[]>>(
      `${this.API_URL}all/${this.locale.current}`,
    );
  }

  getPropertyById(id: string) {
    return this.http
      .get<Response<Property>>(`${this.API_URL}${id}/${this.locale.current}`)
      .pipe(
        map((response) => {
          const { data } = response;

          data.state = {
            ...data.state,
            name: data.state[`state_${this.locale.current}` as keyof Filter],
          };
          data.town = {
            ...data.town,
            name: data.town[`town_${this.locale.current}` as keyof Filter],
          };

          return data;
        }),
      );
  }

  getPropertiesPaginate(params: QueryFilter) {
    return this.http.get<Response<Property[]>>(
      `${this.API_URL}all/${this.locale.current}`,
      {
        params: {
          ...params,
        },
      },
    );
  }

  initGetProperties() {
    this.loading = true;
    this.getProperties().subscribe({
      next: (response) => {
        const { data, ...pagination } = response;
        this.pagination = pagination;
        this.originProperties$.next(data);
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error(error);
      },
    });
  }

  get properties$(): Observable<Property[]> {
    return this.originProperties$.asObservable();
  }
}