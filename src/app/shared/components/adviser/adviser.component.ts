import { Component, Input } from '@angular/core';

import { Adviser } from '@shared/interfaces/adviser.interface';

@Component({
  selector: 'app-adviser',
  standalone: true,
  imports: [],
  templateUrl: './adviser.component.html',
  styleUrl: './adviser.component.scss',
})
export class AdviserComponent {
  @Input() adviser: Partial<Adviser> = {};
}
