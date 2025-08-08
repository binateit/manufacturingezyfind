import { MagazineUpload } from "./magazineUpload";

export interface MagazineItem {
  eflyerId: string;
  magazineName: string;
  eFlyerDescription: string;
  companyName: string;
  startDate: string; // ISO date string
  endDate: string;   // ISO date string
  provinceName: string;
  cityName: string;
  suburb: string;
  mapEflyersUploadDtos: MagazineUpload[];
}
