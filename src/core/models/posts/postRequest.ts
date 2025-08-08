import { PaginationRequest } from "../pagination/pagination";

export interface SearchPostRequest extends PaginationRequest {
    title?: string;
    domainId?: number | null;
    categoryId?: number | null;
    companyId?: number | null;
    location?: string;
}