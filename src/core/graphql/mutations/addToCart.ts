import { gql } from "@apollo/client";

export const ADD_TO_CART = gql`
  mutation PostPrdShoppingCartOptimized($prdShoppingCart: PrdShoppingCartInputType!) {
    postPrdShoppingCartOptimized(prdShoppingCart: $prdShoppingCart) {
      success
      message
      result {
        totalAmount
        vatAmount
        amountExlVat
        prdShoppingCartDto {
          recordID
          productID
          productName
          quantity
          totalPrice
          unitCost
          productImage
        }
      }
    }
  }
`;
