import { initializeApollo } from "@/lib/apolloClient";
import { ADD_TO_CART } from "@/core/graphql/mutations/addToCart";
import { UPDATE_CART } from "@/core/graphql/mutations/updateCart";
import { DELETE_CART_BY_ID } from "@/core/graphql/mutations/deleteCart";
import type { AddToCartInput, UpdateCartInput, CartOperationResult } from "@/core/models/cart/cartMutations";
import { GET_CART_LIST } from "@/core/graphql/queries/getCartList";
import { ProductBid, ProductBidResult } from "../models/products/productBid";
import { CREATE_PRD_BID } from "../graphql/mutations/createProductBid";

class CartService {
  private client = initializeApollo();

  async addToCart(input: AddToCartInput): Promise<CartOperationResult> {
    const { productId, quantity, sessionId, optimistic, fromDate, endDate } = input;
    try {
      const { data } = await this.client.mutate({
        mutation: ADD_TO_CART,
        variables: {
          prdShoppingCart: {
            productId,
            quantity,
            ...(sessionId ? { sessionId } : {}),
            ...(fromDate ? { fromDate } : {}),
            ...(endDate ? { endDate } : {}),
          },
        },
        optimisticResponse: optimistic
          ? {
              postPrdShoppingCartOptimized: {
                __typename: 'ResponsePrdShoppingCartTotalDto',
                success: true,
                message: 'Optimistic add',
                result: {
                  __typename: 'PrdShoppingCartTotalDtoType',
                  totalAmount: (optimistic.unitCost || 0) * quantity,
                  vatAmount: 0,
                  amountExlVat: 0,
                  prdShoppingCartDto: [
                    {
                      __typename: 'PrdShoppingCartDtoType',
                      recordID: -1,
                      productID: productId,
                      productName: optimistic.productName || '',
                      productImage: optimistic.productImage || '',
                      quantity,
                      totalPrice: (optimistic.unitCost || 0) * quantity,
                      unitCost: optimistic.unitCost || 0,
                    },
                  ],
                },
              },
            }
          : undefined,
        refetchQueries: [{ query: GET_CART_LIST, variables: { page: 1, size: 10 } }],
        awaitRefetchQueries: true,
      });

      const res = data?.postPrdShoppingCartOptimized;
      return { success: Boolean(res?.success), message: res?.message };
    } catch (error) {
      return { success: false, message: (error as Error).message };
    }
  }

  async updateCart(input: UpdateCartInput): Promise<CartOperationResult> {
    const { recordId, quantity } = input;
    try {
      const { data } = await this.client.mutate({
        mutation: UPDATE_CART,
        variables: {
          prdShoppingCart: {
            recordId,
            quantity,
          },
        },
        optimisticResponse: {
          updatePrdShoppingCart: {
            __typename: 'PrdShoppingCartType',
            recordId,
            productId: null,
            quantity,
            sessionId: null,
            userId: null,
            dateCreated: null,
          },
        },
        refetchQueries: [{ query: GET_CART_LIST, variables: { page: 1, size: 10 } }],
        awaitRefetchQueries: true,
      });

      const updated = data?.updatePrdShoppingCart;
      return { success: Boolean(updated?.recordId) };
    } catch (error) {
      return { success: false, message: (error as Error).message };
    }
  }

  async deleteCart(recordId: number): Promise<CartOperationResult> {
    try {
      const { data } = await this.client.mutate({
        mutation: DELETE_CART_BY_ID,
        variables: { prdShoppingCartId: recordId },
        optimisticResponse: {
          deletePrdShoppingCartId: true,
        },
        refetchQueries: [{ query: GET_CART_LIST, variables: { page: 1, size: 10 } }],
        awaitRefetchQueries: true,
      });

      const success = Boolean(data?.deletePrdShoppingCartId);
      return { success };
    } catch (error) {
      return { success: false, message: (error as Error).message };
    }
  }

  async bidOnProduct(prdBid:ProductBid):Promise<ProductBidResult> {
    try {
      const response = await this.client.mutate({
        mutation: CREATE_PRD_BID,
        variables: { prdBid },
      })
      if (!response || !response.data) throw new Error('Cannot create bid')
      return response.data.createPrdBid
    } catch (err) {
      throw err
    }
  }
}

export const cartService = new CartService();
