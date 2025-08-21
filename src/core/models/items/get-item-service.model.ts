export interface GetItemServiceResultDto {
    itemRequestServiceID: number;
    itemRequestServiceTitle: string ;
    thumbNailPath: string ;
    itemRequestServiceDescription: string | null;
    categoryID: number
    categoryName: {
        categoryName: string;
    };
}
