import { gql } from "@apollo/client";


export const REGISTER_USER = gql`
mutation RegisterUser($userDto: MstUserDtoInputType!, $platform: Int!) {
    registerUser(userDto: $userDto, platform: $platform) {
    count
    currentPage
    message
    nextPage
    prevPage
    result {
        firstName
        lastName
        paymentUrl
        token
        tokenExpires
    }
    success
    totalPages
    }
}
`;