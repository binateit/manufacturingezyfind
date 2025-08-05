import { PaginationRequest } from "../pagination/pagination";

export interface BusinessRequest extends PaginationRequest {
  companyName?: string;
  statusIds?: string;
  categoryIds?: string;
  provinceIds?: string;
  cityIds?: string;
  suburbIds?: string;
}
