import { gql } from "@apollo/client";

export const GET_MAGAZINES_DETAILS = gql`
  query GetMag(
    $eflyerId: String
  ) {
    getMagazinesList(
      eflyerId: $eflyerId
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
        categoryID
        categoryName
        startDate
        endDate
        statusId
        statusName
        companyId
        companyName
        companyDescription
        isMenu
        streetAddress
        countryID
        countryName
        provinceID
        provinceName
        cityID
        cityName
        suburbID
        suburb
        zipCode
        phone
        companyLocation
        mapEflyersUploadDtos {
          filePath
          thumbNailImagePath
        }
      }
    }
  }
`