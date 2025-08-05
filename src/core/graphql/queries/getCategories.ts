import { gql } from "@apollo/client";

export const GET_CATEGORY_BY_PARENTID = gql`
  query GetCategoryByParentId(
    $id: Int = null,
    $size: Int = null
  ) {
    getMstCategoryByParentId(id: $id, size: $size) {
      result {
        categoryIcon
        categoryId
        categoryName
        categoryThumbNailIcon
        isActive
      }
    }
  }
`