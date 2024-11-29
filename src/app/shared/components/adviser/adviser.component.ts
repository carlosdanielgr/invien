import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adviser',
  standalone: true,
  imports: [],
  templateUrl: './adviser.component.html',
  styleUrl: './adviser.component.scss',
})
export class AdviserComponent {
  @Input() adviser: Partial<{
    name: string;
    email: string;
    phone: string;
    position: string;
    image: string;
  }> = {};
}
