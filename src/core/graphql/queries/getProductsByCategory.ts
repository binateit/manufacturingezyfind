import { gql } from '@apollo/client';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($domainCategoryIds: String, $page: Int, $size: Int) {
    getPrdProductList(domainCategoryIds: $domainCategoryIds, page: $page, size: $size) {
      success
      result {
        productID
        productName
        productImage
        salesTypeId
        typeID
        unitCost
        isActive
        ratingScore
        domainCategory
        startDate
        endDate
        prdBid {
          bidId
          createdDate
          bidAmount
          userId
        }
      }
    }
  }
`;
