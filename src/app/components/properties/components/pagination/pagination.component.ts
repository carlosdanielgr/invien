import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  Pagination,
  QueryPagination,
} from '@shared/interfaces/response.interface';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Output() params = new EventEmitter<QueryPagination>();

  @Input('pagination') set changePagination(newPagination: Pagination) {
    this.pagination = newPagination;
    this.setTotalPages();
  }

  pagination!: Pagination;

  totalPages = 0;

  currentPage = 1;

  constructor() {}

  private setTotalPages(): void {
    if (!this.pagination) return;
    const { total, limit } = this.pagination;
    this.totalPages = Math.ceil(total / limit);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.getPropertyPaginate();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
    this.getPropertyPaginate();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    this.getPropertyPaginate();
  }

  private getPropertyPaginate(): void {
    this.params.emit({
      page: this.currentPage,
    });
  }

  get visiblePages(): number[] {
    let start = Math.max(this.currentPage - 1, 1);
    let end = Math.min(start + 2, this.totalPages);

    if (end - start < 2) {
      start = Math.max(end - 2, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
}
