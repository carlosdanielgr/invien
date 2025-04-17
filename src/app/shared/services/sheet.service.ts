import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SheetService {
  constructor(private readonly http: HttpClient) {}

  postSheetData(data: any) {
    return this.http.post(
      'https://api.apispreadsheets.com/data/wQuX07I4aAzVvDop/',
      data
    );
  }

  postSheetDataAdvisors(data: any) {
    return this.http.post(
      'https://api.apispreadsheets.com/data/oNvNtZvSggQHcn7z/',
      data
    );
  }
}
