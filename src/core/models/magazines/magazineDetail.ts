import { MagazineUpload } from "./magazineUpload";

export interface MagazineDetails {
  eflyerId: string;
  magazineName: string;
  eFlyerDescription: string;
  categoryID: string;
  categoryName: string;
  startDate: string;
  endDate: string;
  statusId: string;
  statusName: string;
  companyId: string;
  companyName: string;
  companyDescription: string;
  isMenu: boolean;
  streetAddress: string;
  countryID: string;
  countryName: string;
  provinceID: string;
  provinceName: string;
  cityID: string;
  cityName: string;
  suburbID: string;
  suburb: string;
  zipCode: string;
  phone: string;
  companyLocation: string;
  mapEflyersUploadDtos: MagazineUpload[];
}