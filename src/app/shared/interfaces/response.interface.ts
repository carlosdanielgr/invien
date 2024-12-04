export interface Response<T> extends Pagination {
  data: T;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface QueryFilter extends Partial<Omit<Pagination, 'total'>> {
  maxPrice?: string;
  maxRooms?: string;
  maxTotalSize?: string;
  minPrice?: string;
  minRooms?: string;
  minTotalSize?: string;
  typeId?: string;
  countryId?: string;
  stateId?: string;
  townId?: string;
}
