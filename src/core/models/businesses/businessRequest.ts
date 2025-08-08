import { PaginationRequest } from "../pagination/pagination";

export interface SearchBusinessRequest extends PaginationRequest {
  companyName?: string;
  statusIds?: string;
  categoryIds?: string;
  provinceIds?: string;
  cityIds?: string;
  suburbIds?: string;
}
