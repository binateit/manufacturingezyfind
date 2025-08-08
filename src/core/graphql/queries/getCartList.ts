import { gql } from "@apollo/client";

export const GET_CART_LIST = gql`
query GetPrdShoppingCart($page: Int!, $size: Int!) {
getPrdShoppingCart(page: $page, size: $size) {
    count
    currentPage
    message
    nextPage
    prevPage
    result {
    prdShoppingCartDto {
        categoryID
        categoryName
        description
        productID
        productImage
        productName
        productNumber
        quantity
        recordID
        fromDate
        endDate
        totalPrice
        unitCost
        prdProduct {
        salesTypeId
        }
    }
    totalAmount
    amountExlVat
    vatAmount
    recuringAmount
    }
}
}
`