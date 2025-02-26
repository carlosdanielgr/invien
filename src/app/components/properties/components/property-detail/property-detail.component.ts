import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '@env/environment';
import { CarouselPropertiesComponent } from '@shared/components/carousel-properties/carousel-properties.component';
import { Property } from '@shared/interfaces/property.interface';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { PropertyService } from '@shared/services/property.service';
import { FormComponent } from '../form/form.component';
import { CurrencyPipe } from '@angular/common';
import { LocaleService } from '@shared/services/locale.service';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [
    FormComponent,
    CarouselPropertiesComponent,
    LoaderComponent,
    CurrencyPipe,
  ],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.scss',
})
export class PropertyDetailComponent implements OnInit {
  property!: Property;

  apiUrl = `${environment.apiUrl}uploads/images/`;

  loading = true;

  id = '';
  readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly router: Router = inject(Router);
  readonly sanitizer: DomSanitizer = inject(DomSanitizer);
  readonly propertyService: PropertyService = inject(PropertyService);
  readonly localeService: LocaleService = inject(LocaleService);

  constructor() {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.listenRouteChange();
  }

  private listenRouteChange(): void {
    this.activatedRoute.params.subscribe({
      next: ({ id }) => {
        this.id = id;
        this.getProperty();
      },
    });
  }

  private getProperty(): void {
    this.propertyService.getPropertyById(this.id).subscribe({
      next: (response) => {
        this.property = response;
        this.sanitizerUrl();
        this.loading = false;
      },
      error: (error) => {
        console.log(error);

        this.router.navigate(['/properties']);
        this.loading = false;
      },
    });
  }

  private sanitizerUrl() {
    if (this.property.url_video)
      this.property.url_video = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.property.url_video
      ) as string;
    this.property.url_map = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.property.url_map
    ) as string;
  }
}
