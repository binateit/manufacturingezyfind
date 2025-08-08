import { gql } from "@apollo/client";

export const GET_PACKAGE_LIST = gql`
  query GetMstPackageList(
    $packageIds: String = null
    $packageId: Int = null
    $status: Boolean = null
  ) {
    getMstPackageList(
      packageIds: $packageIds
      packageId: $packageId
      status: $status
    ) {
      count
      currentPage
      message
      nextPage
      prevPage
      result {
        activeText
        amount
        threeMonths
        sixMonths
        twelveMonths
        threeMonthsVat
        sixMonthsVat
        twelveMonthsVat
        fiveDiscount
        tenDiscount
        fifteenDiscount
        isActive
        isRecommended
        packageID
        packageName
        recommendedText
        sortOrder
        fiveOFF
        tenOFF
        fifteenOFF
        zeroOFF
      }
      success
      totalPages
    }
  }
`;
