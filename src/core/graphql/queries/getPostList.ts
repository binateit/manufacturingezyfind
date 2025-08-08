import { gql } from "@apollo/client";

export const GET_POST_LIST = gql`
 query GetPostList (
    $postId: Int = null
    $title: String = null
    $domainId: Int = null
    $categoryId: Int = null
    $companyId: Int = null
    $location: String = null
    $page: Int = null
    $size: Int = null
  ) {
    getPostList (
      postId: $postId
      title: $title
      domainId: $domainId
      categoryId: $categoryId
      companyId: $companyId
      location: $location
      page: $page
      size: $size
    ) {
      count
      currentPage
      message
      nextPage
      prevPage
      result {
        postID
        title
        descriptionSEO
        companyID
        companyName
        startDate
        endDate
      }
      success
      totalPages
    }
  }
`