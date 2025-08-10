import { gql } from "@apollo/client";

export const REGISTER_BUSINESS = gql`
  mutation RegisterBusiness($userDto: RegisterBusinessInput!) {
    registerBusiness(userDto: $userDto) {
      success
      result {
        firstName
        lastName
        paymentUrl
        token
        tokenExpires
        streetAddress
        userProfileImage
        longitude
        latitude
      }
    }
  }
`;
