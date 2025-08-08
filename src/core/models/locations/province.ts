export interface Province {
  provinceId: string;
  provinceName: string;
  isActive: boolean;
}

export interface ProvinceResponse {
  getProvince: {
    message: string;
    success: boolean;
    result: Province[];
  };
}
