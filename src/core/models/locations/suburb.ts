export interface Suburb {
  cityId: number;
  suburbId: number;
  suburbName: string;
  isActive: boolean;
}

export interface SuburbResponse {
  getSuburb: {
    message: string;
    success: boolean;
    result: Suburb[];
  };
}
