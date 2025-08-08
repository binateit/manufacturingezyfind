import { gql } from "@apollo/client";

export const GET_REVIEW_LIST = gql`
  query GetMstReviewList(
    $key: Int = null
    $keyType: Int = null
    $page: Int = null
    $size: Int = null
  ) {
    getRatingList(
      key: $key
      keyType: $keyType
      page: $page
      size: $size
    ) {
      count
      currentPage
      message
      nextPage
      prevPage
      result {
        title
        name
        review
        ratingScore
        dateofReview
      }
      success
      totalPages
    }
  }
`