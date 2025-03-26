import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { AdviserComponent } from '@shared/components/adviser/adviser.component';
import { CarouselPropertiesComponent } from '@shared/components/carousel-properties/carousel-properties.component';
import { CommentsComponent } from '@shared/components/comments/comments.component';
import { Advisor } from '@shared/interfaces/advisor.interface';
import { AdvisorService } from '@shared/services/advisor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-advisers',
  standalone: true,
  imports: [
    AsyncPipe,
    AdviserComponent,
    CommentsComponent,
    CarouselPropertiesComponent,
  ],
  templateUrl: './advisers.component.html',
  styleUrl: './advisers.component.scss',
})
export class AdvisersComponent implements OnInit {
  advisers$ = new Observable<Advisor[]>();

  constructor(private readonly advisorService: AdvisorService) {}

  ngOnInit() {
    this.advisers$ = this.advisorService.getAdvisors();
  }
}
