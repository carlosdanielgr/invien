import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@env/environment';
import {
  Pagination,
  QueryFilter,
  Response,
} from '@shared/interfaces/response.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocaleService } from './locale.service';
import { Project } from '@shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly API_URL = `${environment.apiUrl}project/`;

  private originProjects$ = new BehaviorSubject<Project[]>([]);

  pagination!: Pagination;

  loading = false;

  constructor(
    private readonly http: HttpClient,
    private readonly locale: LocaleService
  ) {}

  getProjects() {
    return this.http.get<Response<Project[]>>(
      `${this.API_URL}paginated/${this.locale.current}`
    );
  }

  getProjectById(id: string) {
    return this.http.get<Response<Project>>(
      `${this.API_URL}${id}/${this.locale.current}`
    );
  }

  getProjectsPaginate(params: QueryFilter) {
    return this.http.get<Response<Project[]>>(
      `${this.API_URL}paginated/${this.locale.current}`,
      {
        params: {
          ...params,
        },
      }
    );
  }

  initGetProjects() {
    this.loading = true;
    this.getProjects().subscribe({
      next: (response) => {
        const { data, ...pagination } = response;
        this.pagination = pagination;
        this.originProjects$.next(data);
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error(error);
      },
    });
  }

  get projects$(): Observable<Project[]> {
    return this.originProjects$.asObservable();
  }
}
