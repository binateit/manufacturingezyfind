import { Product } from "./Product.model";


export interface ProductsByCategoryResponse {
  getPrdProductList: {
    success: boolean;
    result: Product[];
  };
}
