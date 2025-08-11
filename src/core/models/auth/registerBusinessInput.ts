// Optimized registration input model for business registration
export interface RegisterBusinessInput {
  email: string;
  contactNo: string;
  companyName: string;
  firstName: string;
  lastName: string;
  password: string;
  provinceID: number;
  cityID: number;
  suburbID: number;
  categoryID: number;
  packageID: number;
  domainUrl: string;
  discount: number;
}
