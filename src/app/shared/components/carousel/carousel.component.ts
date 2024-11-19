import { Component, Input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterLink, NgComponentOutlet],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() id: string = '';

  @Input() titlePrimary: string = '';

  @Input() subtitle: string = '';

  @Input() viewAll: string = '';

  @Input() slides: any[] = [];
}
