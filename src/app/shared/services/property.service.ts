import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@env/environment';
import { Property } from '@shared/interfaces/property.interface';
import {
  Pagination,
  QueryPagination,
  Response,
} from '@shared/interfaces/response.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private readonly API_URL = `${environment.apiUrl}property/`;

  private originProperties$ = new BehaviorSubject<Property[]>([]);

  pagination!: Pagination;

  loading = false;

  constructor(private readonly http: HttpClient) {}

  getProperties() {
    return this.http.get<Response<Property[]>>(`${this.API_URL}all/es`);
  }

  getPropertyById(id: string) {
    return this.http.get<Response<Property>>(`${this.API_URL}${id}/es`);
  }

  getPropertiesPaginate(params: QueryPagination) {
    return this.http.get<Response<Property[]>>(`${this.API_URL}all/es`, {
      params,
    });
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
