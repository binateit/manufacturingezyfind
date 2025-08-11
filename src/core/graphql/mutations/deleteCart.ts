import { gql } from "@apollo/client";

export const DELETE_CART_BY_ID = gql`
  mutation DeletePrdShoppingCartId($prdShoppingCartId: Int!) {
    deletePrdShoppingCartId(prdShoppingCartId: $prdShoppingCartId)
  }
`;
