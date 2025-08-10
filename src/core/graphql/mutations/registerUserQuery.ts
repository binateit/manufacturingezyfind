// File: registerUserQuery.ts

import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($userDto: UserRegistrationInput!, $platform: Int!) {
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


