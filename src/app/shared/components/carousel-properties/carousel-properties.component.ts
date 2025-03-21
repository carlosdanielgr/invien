import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { splitArray } from '@shared/functions';
import { ProjectService } from '@shared/services/project.service';
import { Project } from '@shared/interfaces/project.interface';
import { ProjectComponent } from 'src/app/components/projects/components/project/project.component';
import { NoDataComponent } from '../no-data/no-data.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { PropertySkeletonComponent } from '../property-skeleton/property-skeleton.component';

@Component({
  selector: 'app-carousel-properties',
  standalone: true,
  imports: [
    CarouselComponent,
    ProjectComponent,
    PropertySkeletonComponent,
    NoDataComponent,
  ],
  templateUrl: './carousel-properties.component.html',
  styleUrl: './carousel-properties.component.scss',
})
export class CarouselPropertiesComponent implements OnInit, OnDestroy {
  matrixProperties: Project[][] = [];

  subscription$ = new Subscription();

  isWeb = window.innerWidth > 992;

  title = $localize`:@@car-prop-title:COMIENZA A INVERTIR`;

  noProperties = $localize`:@@no-projects:No hay proyectos disponibles`;

  subtitle = $localize`:@@projects-selected:Proyectos Inmobiliarios`;

  constructor(readonly projectService: ProjectService) {}

  ngOnInit(): void {
    this.subscription$ = this.projectService.projects$.subscribe({
      next: (projects) => {
        this.matrixProperties = splitArray<Project>(
          this.isWeb ? 3 : 1,
          projects
        );
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
