import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '@env/environment';
import { CarouselPropertiesComponent } from '@shared/components/carousel-properties/carousel-properties.component';
import { Property } from '@shared/interfaces/property.interface';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { PropertyService } from '@shared/services/property.service';
import { FormComponent } from '../form/form.component';
import * as advisors from '../../../../../assets/advisors.json';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [FormComponent, CarouselPropertiesComponent, LoaderComponent],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.scss',
})
export class PropertyDetailComponent implements OnInit {
  property!: Property;

  apiUrl = `${environment.apiUrl}uploads/images/`;

  loading = true;

  id = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly sanitizer: DomSanitizer,
    private readonly propertyService: PropertyService,
  ) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getProperty();
  }

  private getProperty(): void {
    this.propertyService.getPropertyById(this.id).subscribe({
      next: (response) => {
        this.property = response.data;
        this.property.advisor = advisors.data.find(
          (advisor) => advisor.id === +this.property.advisorId,
        );
        this.sanitizerUrl();
        this.loading = false;
      },
      error: (error) => {
        this.router.navigate(['/properties']);
        this.loading = false;
      },
    });
  }

  private sanitizerUrl() {
    this.property.url_video = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.property.url_video,
    ) as string;
    this.property.url_map = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.property.url_map,
    ) as string;
  }

  onPrintPdf(): void {
    window.print();
  }
}
