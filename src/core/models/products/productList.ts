import { ProductBid } from "./productBid";

export interface ProductItem {
  productID: number;
  productName: string;
  productImage: string;
  salesTypeId: number;
  typeID: number;
  unitCost: number;
  isActive: boolean;
  ratingScore: number;
  domainCategory: number;
  startDate: string;
  endDate: string;
  prdBid: ProductBid[] | null;
}