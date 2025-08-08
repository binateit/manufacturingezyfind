import { PaginationRequest } from "../pagination/pagination";

export interface SearchProductRequest extends PaginationRequest {
    domainCategoryIds?: string;
    scopeId?: number | null;
    salesTypeId?: number | null;
    companyId?: number | null;
}
