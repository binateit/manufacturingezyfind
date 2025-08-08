import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts(
    $salesTypeId: Int = null
    $domainCategoryIds: String = null
    $scopeId: Int = null
    $size: Int = null
    $page: Int  = null
    $companyId: Int = null
  ) {
    getPrdProductList(
      salesTypeId: $salesTypeId
      domainCategoryIds: $domainCategoryIds
      scopeId: $scopeId
      page: $page
      size: $size  
      companyId: $companyId
    ) {
      count
      currentPage
      message
      nextPage
      prevPage
      success
      totalPages
      result {
        categoryID
        categoryName
        description
        companyID
        salesTypeId
        scopeID
        productID
        productImage
        productName
        domainCategory
        endDate
        unitCost
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