import { gql } from "@apollo/client";


export const PURCHASE_SHOPPING_CART = gql`
    query PurchaseShoppingCartAsync($id: Int!) {
        purchaseShoppingCartAsync(id: $id) {
        count
        currentPage
        message
        nextPage
        prevPage
        success
        totalPages
        result {
            paymentUrl,
            paymentMethod
                }
        }
    }
`