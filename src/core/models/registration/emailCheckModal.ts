export interface EmailCheckDto {
    count: number;
    currentPage: number;
    message: string;
    nextPage: number;
    prevPage: number;
    success: boolean;
    totalPages: number;
}