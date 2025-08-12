import { gql } from "@apollo/client";

export const CREATE_PRD_BID = gql`
    mutation CreatePrdBid($prdBid: PrdBidInputType!) {
        createPrdBid(prdBid: $prdBid) {
        bidAmount
        bidId
        productId
    }
}
`;
