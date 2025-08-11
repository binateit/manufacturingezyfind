import { gql } from '@apollo/client';

export const SSO_LOGIN = gql`
  query SSOLogin {
    sSOLogin {
      count
      currentPage
      message
      nextPage
      prevPage
      success
      totalPages
      result {
        firstName
        lastName
        token
        tokenExpires
      }
    }
  }
`;
