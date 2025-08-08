import { gql } from "@apollo/client";

export const GET_PACKAGE_DETAIL = gql`
  query GetMstPackageDetailList(
    $packageId: Int = null
    $status: Boolean = null
  ) {
    getMstPackageDetailList(packageId: $packageId, status: $status) {
      count
      currentPage
      message
      nextPage
      prevPage
      result {
        activeText
        actualValue
        amount
        attributeID
        attributeName
        isActive
        packageDetailsID
        packageID
        pD_ActiveText
        pD_isActive
        sortOrder
        value
      }
      success
      totalPages
    }
  }
`;