import { Component, EventEmitter, Output } from '@angular/core';
import { LocationsFilterComponent } from '@shared/components/locations-filter/locations-filter.component';

import { QueryFilterProject } from '@shared/interfaces/response.interface';

@Component({
  selector: 'app-project-filter',
  standalone: true,
  imports: [LocationsFilterComponent],
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.scss',
})
export class ProjectFilterComponent {
  @Output() newFilter = new EventEmitter<QueryFilterProject>();

  currentFilters: Record<string, any> = {};

  constructor() {}

  onSetFilterPrice(value: string, type: string) {
    this.currentFilters[`${type}Price`] = value;
  }
  onSearch() {
    this.newFilter.emit(this.currentFilters);
  }
}
