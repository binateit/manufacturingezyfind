import { gql } from "@apollo/client";

export const GET_MAGAZINES_LIST = gql`
   query GetMag(
    $companyIds: String
    $provinceIds: String
    $cityIds: String
    $suburbIds: String
    $statusIds: String
    $page: Int
    $size: Int
  ) {
    getMagazinesList(
      provinceIds: $provinceIds
      companyIds: $companyIds
      cityIds: $cityIds
      suburbIds: $suburbIds
      statusIds: $statusIds
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
        eflyerId
        magazineName
        eFlyerDescription
        companyName
        startDate
        endDate
        provinceName
        cityName
        suburb
        mapEflyersUploadDtos {
          filePath
          thumbNailImagePath
        }
      }
    }
  }
`