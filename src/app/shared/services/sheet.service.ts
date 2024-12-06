import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SheetService {
  constructor(private readonly http: HttpClient) {}

  postSheetData(data: any) {
    return this.http.post(
      'https://api.apispreadsheets.com/data/ImgRbAbOhc0MIxIW/',
      data,
    );
  }
}
