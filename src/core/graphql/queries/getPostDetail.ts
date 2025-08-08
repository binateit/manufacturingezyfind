import { gql } from "@apollo/client";

export const GET_POST_DETAILS = gql`
  query GetPostList (
    $postId: Int = null
    $page: Int = null
    $size: Int = null
  ) {
    getPostList (
      postId: $postId
      page: $page
      size: $size
    ) {
      count
      currentPage
      message
      nextPage
      prevPage
      result {
        categoryID
        companyID
        companyName
        description
        descriptionSEO
        documentName
        domainID
        endDate
        filePath
        googleSchema
        keywordsSEO
        location
        name
        postID
        startDate
        thumbNailImagePath
        title
        titleSEO
      }
      success
      totalPages
    }
  }
`