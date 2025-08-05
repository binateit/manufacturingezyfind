import { gql } from "@apollo/client";

export const GET_CITIES = gql`
  query GetCity {
    getCity {
      result {
        provinceId
        cityId
        cityName
        isActive
      }
    }
  }
`;
