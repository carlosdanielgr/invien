import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SheetService } from '@shared/services/sheet.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
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

  loading = false;

  constructor(private readonly sheetService: SheetService) {}

  onSubmit() {
    if (this.form.invalid) return;
    const { name, email, phone, message } = this.form.value;
    const date = new Date();
    const body = {
      Fecha: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      Nombre: name,
      'Correo Electrónico': email,
      Teléfono: phone,
      Mensaje: message,
    };
    this.loading = true;
    this.sheetService.postSheetData(body).subscribe({
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
