import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@env/environment';
import { Property } from '@shared/interfaces/property.interface';
import { Response } from '@shared/interfaces/response.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private readonly API_URL = `${environment.apiUrl}property/`;

  properties$ = new BehaviorSubject<Property[]>([]);

  loading = false;

  constructor(private readonly http: HttpClient) {}

  getProperties() {
    return this.http.get<Response<Property[]>>(`${this.API_URL}all/es`);
  }

  initGetProperties() {
    this.loading = true;
    this.getProperties().subscribe({
      next: (response) => {
        this.properties$.next(response.data);
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error(error);
      },
    });
  }
}
