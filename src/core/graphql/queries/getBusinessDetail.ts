import { gql } from "@apollo/client";

export const GET_BUSINESS_DETAILS = gql`
  query GetBusiness(
    $companyId: Int = null
    $companyName: String = null
    $franchiseeId: Int = null
    $statusIds: String = null
    $categoryIds: String = null
    $provinceIds: String = null
    $cityIds: String = null
    $suburbIds: String = null
    $size: Int = null
    $page: Int = null
  ) {
    getBusinessList(
      companyId: $companyId
      companyName: $companyName
      franchiseeId: $franchiseeId
      statusIds: $statusIds
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
        bEEScorePoint
        bEEStatus
        bEEStatusID
        callType
        categoryIds
        companyId
        companyName
        companyPercentage
        companyStatus
        companyStatusID
        compCityID
        compCityName
        compCountryID
        compCountryName
        compDescription
        compEmailId
        compHelpDeskNumber
        compPackageId
        compPhone
        compProvinceID
        compProvinceName
        compStreetAddress
        compSuburb
        compSuburbID
        compWebSite
        directorsCount
        documentPath
        featured
        intCompanyMBUDeviceID
        intCompanyMBUDeviceType
        intCompanyMBUEmail
        intCompanyMBUID
        intCompanyMBUName
        intCompPackageID
        intFavouriteID
        intFranchiseID
        intRatingScore
        joinDate
        logoPath
        mainBusinessUserID
        mainCategoryID
        procurementRecognition
        ratingScore
        vATNumber
        zipCode
      }
    }
  }
`