export interface PaginationRequest {
  page: number;
  size: number;
}

export interface PaginationResponse {
  count: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  totalPages: number;
}
