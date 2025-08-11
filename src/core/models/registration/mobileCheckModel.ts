export interface MobileCheckResponseDto {
    count: number;
    currentPage: number;
    message: string | null;
    nextPage: number;
    prevPage: number;
    result: string | null;
    success: boolean;
    totalPages: number;
}