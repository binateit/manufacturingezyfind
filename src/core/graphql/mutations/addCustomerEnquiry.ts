import { gql } from "@apollo/client";

export const ADD_CUSTOMER_ENQUIRY = gql`
    mutation AddCustomerEnquiry(
    $customerEnquiry: MstCustomerEnquiryInputType!
    ) {
    addCustomerEnquiry(customerEnquiry: $customerEnquiry) {
        count
        currentPage
        message
        nextPage
        prevPage
        success
        totalPages
        }
    }
`