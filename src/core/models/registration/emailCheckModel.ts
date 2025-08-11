export interface EmailCheckResponseDto {
    count: number;
    currentPage: number;
    message: string;
    nextPage: number;
    prevPage: number;
    success: boolean;
    totalPages: number;
}