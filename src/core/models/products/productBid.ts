export interface ProductBid {
  bidId?: number;
  bidAmount?: number;
  productId?: number;
  createdDate?:string;
  userId?:number;
}

export interface ProductBidResult {
  bidId:number;
}