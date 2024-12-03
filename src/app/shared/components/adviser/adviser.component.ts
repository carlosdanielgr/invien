import { Component, Input } from '@angular/core';

import { Advisor } from '@shared/interfaces/advisor.interface';

@Component({
  selector: 'app-adviser',
  standalone: true,
  imports: [],
  templateUrl: './adviser.component.html',
  styleUrl: './adviser.component.scss',
})
export class AdviserComponent {
  @Input() adviser!: Advisor;
}
