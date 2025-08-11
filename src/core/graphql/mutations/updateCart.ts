import { gql } from "@apollo/client";

export const UPDATE_CART = gql`
  mutation UpdatePrdShoppingCart($prdShoppingCart: PrdShoppingCartInputType!) {
    updatePrdShoppingCart(prdShoppingCart: $prdShoppingCart) {
      recordId
      productId
      quantity
      sessionId
      userId
      dateCreated
    }
  }
`;
