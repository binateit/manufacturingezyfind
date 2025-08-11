import { PaginationRequest } from "../pagination/pagination";

export interface SearchMagazineRequest extends PaginationRequest {
  companyIds?: string;
  statusIds?: string;
  provinceIds?: string;
  cityIds?: string;
  suburbIds?: string;
}
