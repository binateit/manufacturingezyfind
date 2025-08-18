


export interface CustomerEnquiryInputType {
    enquiryTitle?: string | null;
    enquiryDescription?: string | null;
    companyId?: number | null;
}


export interface CustomerEnquiryResponse {
    count: number;
    currentPage: number;
    message: string | null;
    nextPage: number;
    prevPage: number;
    success: boolean;
    totalPages: number;
}