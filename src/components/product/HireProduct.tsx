import { useState } from "react";
import ProductImage from "./ProductCard/ProductImage";
import ProductInfo from "./ProductCard/ProductInfo";
import QuantitySelector from "./ProductCard/QuantitySelector";
import DateSelector from "./ProductCard/DateSelector";
import Button from "../ui/Button";
import { Product } from "@/core/models/products/Product.model";

interface HireProductProps {
  product: Product;
}

export default function HireProduct({ product }: HireProductProps) {
  const [orderQuantity, setOrderQuantity] = useState(1);

  return (
    <div className="flex flex-col h-full">
      <div className="px-3 py-3 product-box bg-white w-full shadow-[0px_4px_44px_0px_rgb(0,0,0,0.1)] h-full flex flex-col">
        <ProductImage productImage={product.productImage} alt={product.productName ?? ''} />
        <ProductInfo productID={product.productID} productName={product.productName ?? ''} unitCost={product.unitCost} />
        <QuantitySelector value={orderQuantity} onChange={setOrderQuantity} />
        <DateSelector />
        <div className="flex justify-between mt-auto">
          <Button className="bg-[var(--primary-color)] hover:bg-white border border-[var(--primary-color)] text-sm flex items-center gap-1 text-white hover:text-[var(--primary-color)]">Hire Now</Button>
          <Button className="bg-white text-sm border-1 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white flex">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}
