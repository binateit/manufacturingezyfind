import { gql } from "@apollo/client";

export const GET_PROVINCE = gql`
  query GetProvince {
    getProvince {
      result {
        provinceId
        provinceName
        isActive
      }
    }
  }
`;