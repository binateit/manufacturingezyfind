import { gql } from '@apollo/client';

export const GET_SESSION = gql`
  query GetSession($id: Int = null) {
    getSession(id: $id) {
      result {
        domain
        expires
        sessionContractLogin
        sessionKeyContractLogin
        sessionKeyLogin
        sessionLogin
      }
      success
    }
  }
`;
