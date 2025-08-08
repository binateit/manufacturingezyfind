export interface City {
  provinceId: number;
  cityId: number;
  cityName: string;
  isActive: boolean;
}

export interface CityResponse {
  getCity: {
    message: string;
    success: boolean;
    result: City[];
  };
}
