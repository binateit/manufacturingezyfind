import { gql } from "@apollo/client";

export const GET_CITY_BY_PROVINCE = gql`
  query GetCityByProvince($id: Int = null) {
    getCityByProvince(id: $id) {
      result {
        provinceId
        cityId
        cityName
        isActive
      }
    }
  }
`;