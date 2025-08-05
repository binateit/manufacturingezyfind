import { ProductBid } from "./ProductBid.model";

export interface Product {
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