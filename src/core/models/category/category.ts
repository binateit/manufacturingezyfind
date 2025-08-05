export interface Category {
  categoryId: number;
  categoryName: string;
  isActive: boolean;
}

export interface CategoryResponse {
  getCategoryByParentId: {
    message: string;
    success: boolean;
    result: Category[];
  };
}
