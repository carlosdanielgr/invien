import { Component, Input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() titlePrimary: string = '';

  @Input() subtitle: string = '';

  @Input() slides: any[] = [];
}
