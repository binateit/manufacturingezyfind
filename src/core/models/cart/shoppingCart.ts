// src/core/models/cart/shoppingCart.ts

export interface PrdProduct {
    salesTypeId: number;
}

export interface PrdShoppingCartDto {
    categoryID: number;
    categoryName: string;
    description: string;
    productID: number;
    productImage: string;
    productName: string;
    productNumber: string;
    quantity: number;
    recordID: number;
    fromDate: string;
    endDate: string;
    totalPrice: number;
    unitCost: number;
    prdProduct: PrdProduct;
}

export interface PrdShoppingCartResult {
    prdShoppingCartDto: PrdShoppingCartDto[];
    totalAmount: number;
    amountExlVat: number;
    vatAmount: number;
    recuringAmount: number;
}

export interface GetPrdShoppingCartResponse {
    count: number;
    currentPage: number;
    message: string;
    nextPage: number;
    prevPage: number;
    result: PrdShoppingCartResult;
}

export interface GetPrdShoppingCartData {
    getPrdShoppingCart: GetPrdShoppingCartResponse;
}
