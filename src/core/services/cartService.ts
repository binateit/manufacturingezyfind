import { initializeApollo } from "@/lib/apolloClient";
import { ADD_TO_CART } from "@/core/graphql/mutations/addToCart";
import { UPDATE_CART } from "@/core/graphql/mutations/updateCart";
import { DELETE_CART_BY_ID } from "@/core/graphql/mutations/deleteCart";
import type { AddToCartInput, UpdateCartInput, CartOperationResult } from "@/core/models/cart/cartMutations";
import { GET_CART_LIST } from "@/core/graphql/queries/getCartList";
import { ProductBid, ProductBidResult } from "../models/products/productBid";
import { CREATE_PRD_BID } from "../graphql/mutations/createProductBid";
import { ProductHire, ProductHireResult } from "../models/products/productHire";
import { CREATE_PRD_HIRE } from "../graphql/mutations/createProductHire";
import { PurchaseShoppingCartResponseDto } from "../models/products/productPurchase";
import { PURCHASE_SHOPPING_CART } from "../graphql/queries/purchaseShoppingCart";

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
    const { recordId, quantity , productId , fromDate , endDate } = input;
    try {
      const { data } = await this.client.mutate({
        mutation: UPDATE_CART,
        variables: {
          prdShoppingCart: {
            recordId,
            quantity,
            productId,
            fromDate,
            endDate,
          },
        },
        
      });      
      const updated = data?.postPrdShoppingCartOptimized;
      return { success: Boolean(updated?.success) };
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

  async bidOnProduct(input: ProductBid): Promise<ProductBidResult> {
    try {
      const response = await this.client.mutate({
        mutation: CREATE_PRD_BID,
        variables: { input },
        fetchPolicy: "no-cache",
      })
      if (!response || !response.data) throw new Error('Cannot create bid')
      return response?.data?.createPrdBid
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async hireProduct(input: ProductHire): Promise<ProductHireResult> {
    try {
      const response = await this.client.mutate({
        mutation: CREATE_PRD_HIRE,
        variables: { prdHire: input },
        fetchPolicy: 'no-cache'
      })
      if (!response || !response.data) throw new Error('Cannot Hire')
      return response?.data?.createPrdHire
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async purchaseShoppingCart(id: number): Promise<PurchaseShoppingCartResponseDto> {
    try {
      const response = await this.client.query({
        query: PURCHASE_SHOPPING_CART,
        variables:{id},
        fetchPolicy:"no-cache"
      })
      if (!response || !response.data)
        throw new Error('Cannot purchase')
      return response.data.purchaseShoppingCartAsync
    } catch (err) {
        throw new Error((err as Error).message)
    }
  } 
}

export const cartService = new CartService();
