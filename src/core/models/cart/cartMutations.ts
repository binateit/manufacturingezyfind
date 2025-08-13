export interface AddToCartInput {
  productId: number;
  quantity: number;
  sessionId?: string;
  optimistic?: {
    productName?: string;
    productImage?: string;
    unitCost?: number;
  };
  fromDate?: string; // ISO string for hire start
  endDate?: string;  // ISO string for hire end
}

export interface UpdateCartInput {
  recordId?: number;
  quantity?: number;
  productId?: number | null;
  fromDate?: Date;
  endDate?: Date ;
}

export interface DeleteCartInput {
  recordId: number;
}

export interface CartOperationResult {
  success: boolean;
  message?: string;
}
