import { Component, Input } from '@angular/core';

import { Advisor } from '@shared/interfaces/advisor.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() advisor!: Advisor;

  placeholders = {
    name: $localize`:@@name:Nombre`,
    email: $localize`:@@contact-email:tucorreo@email.com`,
    message: $localize`:@@email-message:Dejanos un mensaje`,
  };
}
