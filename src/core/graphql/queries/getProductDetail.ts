import { gql } from "@apollo/client";

export const GET_PRODUCT_DETAILS = gql`
  query GetProducts(
    $productId: Int
  ) {
    getPrdProductList(
      productId: $productId     
    ) {
      count
      currentPage
      message
      nextPage
      prevPage
      success
      totalPages
      result {
        activeText
        categoryID
        categoryName
        description
        documentName
        documentPath
        isActive
        companyID
        ratingScore
        salesTypeId
        scopeID
        typeID
        productID
        productImage
        productName
        productNumber
        inventory
        clickCount
        viewCount
        unitCost
        length
        width
        height
        volume
        weight
        googleSchema
        domainCategoryName
        domainCategory
        endDate
        mapProductImages {
          imageName
          imagePath
        }
        prdBid {
          bidId
          createdDate
          bidAmount
          userId
        }
        prdHire {
          hireId
          userId
          isAccepted
          fromDate
          toDate
          returned
        }
      }
    }
  }
`