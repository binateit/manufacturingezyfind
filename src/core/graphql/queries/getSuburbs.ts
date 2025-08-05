import { gql } from "@apollo/client";

export const GET_SUBURB = gql`
  query GetSuburb {
    getSuburb {
      result {
        cityId
        suburbId
        suburbName
        isActive
      }
    }
}`