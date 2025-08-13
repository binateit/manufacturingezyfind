import { gql } from "@apollo/client";



export const ITEM_REQUEST = gql`
    mutation PostMstItemRequest(
    $mstItemRequest: MstItemRequestInputType!
    $files: [Upload] = null
    ) {
    postMstItemRequest(mstItemRequest: $mstItemRequest, files: $files) {
        count
        currentPage
        message
        nextPage
        prevPage
        result
        success
        totalPages
        }
    }
`