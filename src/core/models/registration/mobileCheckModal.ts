export interface MobileCheckDto {
    count: number;
    currentPage: number;
    message: string | null;
    nextPage: number;
    prevPage: number;
    result: string | null;
    success: boolean;
    totalPages: number;
}