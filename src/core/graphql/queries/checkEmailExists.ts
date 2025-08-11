import { gql } from "@apollo/client";

export const EMAIL_CHECK = gql`
  query EmailCheck($email: String = null) {
    emailCheck(email: $email) {
      success
    }
  }
`;