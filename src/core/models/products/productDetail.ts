
import { ProductBid } from "./productBid";
import { ProductHire } from "./productHire";
import { ProductImage } from "./productImage";

export interface ProductDetails {
  activeText: string;
  categoryID: number;
  categoryName: string;
  description: string;
  documentName: string;
  documentPath: string;
  isActive: boolean;
  companyID: number;
  ratingScore: number;
  salesTypeId: number;
  scopeID: number;
  typeID: number;
  productID: number;
  productImage: string;
  productName: string;
  productNumber: string;
  inventory: number;
  clickCount: number;
  viewCount: number;
  unitCost: number;
  length: number;
  width: number;
  height: number;
  volume: number;
  weight: number;
  googleSchema: string;
  domainCategoryName: string;
  domainCategory: string;
  endDate: string;
  mapProductImages: ProductImage[];
  prdBid: ProductBid[] | null;
  prdHire: ProductHire[] | null;
}