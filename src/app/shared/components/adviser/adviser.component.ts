import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@env/environment';

import { Advisor } from '@shared/interfaces/advisor.interface';
import { LocaleService } from '@shared/services/locale.service';

@Component({
  selector: 'app-adviser',
  standalone: true,
  imports: [],
  templateUrl: './adviser.component.html',
  styleUrl: './adviser.component.scss',
})
export class AdviserComponent implements OnInit {
  @Input() adviser!: Advisor;

  role = '';

  urlImage = `${environment.apiUrl}uploads/advisors/`;

  constructor(private readonly locale: LocaleService) {}

  ngOnInit(): void {
    this.urlImage += this.adviser.image;
    this.role =
      this.adviser[`role_${this.locale.current}` as 'role_en' | 'role_es'];
  }
}
