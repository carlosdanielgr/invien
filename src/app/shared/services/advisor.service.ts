import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Advisor } from '@shared/interfaces/advisor.interface';

@Injectable({
  providedIn: 'root',
})
export class AdvisorService {
  private readonly API_URL = `${environment.apiUrl}`;

  constructor(private readonly http: HttpClient) {}

  getAdvisors() {
    return this.http.get<Advisor[]>(`${this.API_URL}advisor`);
  }
}
