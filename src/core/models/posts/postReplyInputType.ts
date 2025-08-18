export interface PostReplyInputType {
    title?: string | null;
    description?: string | null;
    titleCategoryId?: number | null;
    postId?: number | null;
    postReplyAttachments?: (PostReplyAttachmentInputType | null)[] | null;
}

export interface PostReplyAttachmentInputType {
    thumbNailImagePath?: string | null;
}

export interface PostReplyResponse {
    count: number;
    currentPage: number;
    message: string | null;
    nextPage: number;
    prevPage: number;
    result: number | null;
    success: boolean;
    totalPages: number;
}
