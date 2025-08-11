import { gql } from '@apollo/client';

export const SSO_LOGIN = gql`
  query SSOLogin {
    sSOLogin {
      success
      message
      result {
        firstName
        lastName
        token
        tokenExpires
      }
    }
  }
`;
