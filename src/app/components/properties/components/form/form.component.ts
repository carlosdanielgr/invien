import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { environment } from '@env/environment';

import { Advisor } from '@shared/interfaces/advisor.interface';
import { SheetService } from '@shared/services/sheet.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() advisor!: Advisor;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  placeholders = {
    name: $localize`:@@name:Nombre`,
    email: $localize`:@@contact-email:tucorreo@email.com`,
    message: $localize`:@@email-message:Dejanos un mensaje`,
  };

  urlImage = `${environment.apiUrl}uploads/advisors/`;

  loading = false;

  constructor(private readonly sheetService: SheetService) {}

  onSubmit() {
    if (this.form.invalid) return;
    const { name, email, phone, message } = this.form.value;
    const body = {
      Fecha: new Date(),
      Nombre: name,
      'Correo Electrónico': email,
      Teléfono: phone,
      Mensaje: message,
      Asesor: this.advisor.name,
    };
    this.loading = true;
    this.sheetService.postSheetDataAdvisors(body).subscribe({
      next: () => {
        this.form.reset();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
