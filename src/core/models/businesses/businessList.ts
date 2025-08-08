export interface BusinessItem {
  companyId: number;
  companyName: string;
  joinDate: string;
  logoPath: string;
  compProvinceName: string;
  compCityName: string;
  compSuburb: string;
  compStreetAddress: string;
  compDescription: string;
  latitude: string;
  longitude: string;
}

export interface GetBusinessListResponse {
  getBusinessList: {
    count: number;
    currentPage: number;
    message: string;
    nextPage: number;
    prevPage: number;
    success: boolean;
    totalPages: number;
    result: BusinessItem[];
  };
}
