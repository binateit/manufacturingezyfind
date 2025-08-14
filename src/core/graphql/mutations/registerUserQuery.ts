// File: registerUserQuery.ts

import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($userDto: MstUserDtoInputType!, $platform: Int!) {
    registerUser(userDto: $userDto, platform: $platform) {
      success
      result {
        firstName
        lastName
        token
        tokenExpires
      }
    }
  }
`;


