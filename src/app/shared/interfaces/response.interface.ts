export interface Response<T> extends Pagination {
  data: T;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface QueryPagination extends Partial<Omit<Pagination, 'total'>> {}
