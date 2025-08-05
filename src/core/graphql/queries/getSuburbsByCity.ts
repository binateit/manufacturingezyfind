import { gql } from "@apollo/client";

export const GET_SUBURB_BY_CITY = gql`
  query GetSuburbByCity($id: Int = null) {
    getSuburbByCity(id: $id) {
      result {
        cityId
        suburbId
        suburbName
        isActive
      }
    }
  }
`;