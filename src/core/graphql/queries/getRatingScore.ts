import { gql } from "@apollo/client";

export const GET_RATING_SCORE_LIST = gql`
  query GetMstRatingScoreList(
    $key: Int = null
    $keyType: Int = null
    $page: Int = null
    $size: Int = null
  ) {
    getMstRatingScoreList(
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
        dateofReview
        ratingScoreName
        ratingScorePercent
        review
        title
        userName
      }
      success
      totalPages
    }
  }
`