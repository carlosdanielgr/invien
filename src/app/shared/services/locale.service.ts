import { Inject } from '@angular/core';
import { Injectable, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  current = this.locale;

  constructor(
    @Inject(LOCALE_ID)
    private locale: string,
  ) {}
}
