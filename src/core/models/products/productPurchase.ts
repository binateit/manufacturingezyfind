
export interface PurchaseShoppingCartResult {
    paymentUrl: string | null;
    paymentMethod: string | null;
}

export interface PurchaseShoppingCartResponseDto {
    count: number;
    currentPage: number;
    message: string | null;
    nextPage: number;
    prevPage: number;
    success: boolean;
    totalPages: number;
    result: PurchaseShoppingCartResult| null;
}

