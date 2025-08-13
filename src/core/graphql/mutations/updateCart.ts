import { gql } from "@apollo/client";

export const UPDATE_CART = gql`
  mutation postPrdShoppingCartOptimized(
    $prdShoppingCart: PrdShoppingCartInputType!
  ) {
    postPrdShoppingCartOptimized(prdShoppingCart: $prdShoppingCart) {
      count
      currentPage
      message
      nextPage
      prevPage
      success
      totalPages
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
`;
