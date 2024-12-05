import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  placeholders = {
    name: $localize`:@@name:Nombre`,
    email: $localize`:@@contact-email:tucorreo@email.com`,
    message: $localize`:@@email-message:Dejanos un mensaje`,
  };
}
