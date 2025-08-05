import { gql } from "@apollo/client";

export const GUEST_LOGIN = gql`
  query GuestLogin {
    guestLogin {
      message
      result {
        validTo
        value
      }
    }
  }
`;
