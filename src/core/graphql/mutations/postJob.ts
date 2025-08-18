import { gql } from "@apollo/client";


export const POST_REPLY = gql`
    mutation PostReply(
    $post: PostReplyInputType!
    ) {
    postReply(post: $post) {
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