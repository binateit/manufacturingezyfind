import { gql } from "@apollo/client";

export const GET_BUSINESS_LIST = gql`
  query getBusinessList(
    $statusIds: String!
    $companyName: String!
    $categoryIds: String!
    $provinceIds: String!
    $cityIds: String!
    $suburbIds: String!
    $size: Int = null
    $page: Int = null
  ) {
    getBusinessList(
      statusIds: $statusIds
      companyName: $companyName
      categoryIds: $categoryIds
      provinceIds: $provinceIds
      cityIds: $cityIds
      suburbIds: $suburbIds
      page: $page
      size: $size
    ) {
      count
      currentPage
      message
      nextPage
      prevPage
      success
      totalPages
      result {
        companyId
        companyName
        joinDate
        logoPath
        compProvinceName
        compCityName
        compSuburb
        compStreetAddress
        compDescription
        latitude
        longitude
      }
    }
  }
`;
