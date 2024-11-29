import { Component, Input } from '@angular/core';
import { environment } from '@env/environment';
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

  apiUrl = `${environment.apiUrl}uploads/advisors/`;
}