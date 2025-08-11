import { gql } from "@apollo/client";

export const MOBILE_CHECK = gql`
query MobileCheck($mobile: String = null) {
    mobileCheck(mobile: $mobile) {
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
`;