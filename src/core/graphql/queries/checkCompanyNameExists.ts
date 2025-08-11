import { gql } from "@apollo/client";

export const COMPANY_CHECK = gql`
  query CompanyCheck($name: String = null) {
    companyCheck(name: $name) {
      success
    }
  }
`;
