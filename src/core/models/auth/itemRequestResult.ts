export interface ItemRequestResult {
    count: number;
    currentPage: number;
    message: string | null;
    nextPage: number;
    prevPage: number;
    success: boolean;
    totalPages: number;
}

export interface PostMstItemRequest {
    postMstItemRequest: ItemRequestResult | null;
}