import { useState } from "react";
import Link from "next/link";
import { Product } from "@/core/models/products/Product.model";
import slugify from "slugify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";
import { formatCurrency } from "@/lib/format";
import ProductImage from "./ProductCard/ProductImage";


interface PurchaseProductProps {
  product: Product;
}

export default function PurchaseProduct({ product }: PurchaseProductProps) {
  const [orderQuantity, setOrderQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    setOrderQuantity(Math.max(1, value)); // Minimum 1
  };

  const increment = () => handleQuantityChange(orderQuantity + 1);
  const decrement = () => handleQuantityChange(orderQuantity - 1);

  const productLink = `/manufacturing/product/${product.productID}/${slugify(product.productName ?? '')}.html`;


  return (
    <div className="flex flex-col h-full">
      <div className="product-box px-3 py-3 bg-white w-full h-full shadow-[0px_4px_44px_0px_rgb(0,0,0,0.1)] flex flex-col">
        {/* Image */}
        <ProductImage productImage={product.productImage} alt={product.productName ?? ''} />

        {/* Title */}
        <Link href={productLink}>
          <p className="text-base font-semibold mb-3 line-clamp-2 min-h-[48px] hover:text-[var(--primary-color)] transition-colors">
            {product.productName}
          </p>
        </Link>

        {/* Price */}
        <p className="font-medium mb-3">{formatCurrency(product.unitCost)}</p>

        {/* Quantity Selector */}
        <div className="relative flex items-center mb-3">
          <input
            type="number"
            min={1}
            value={orderQuantity}
            onChange={(e) => handleQuantityChange(Number(e.target.value))}
            className="form-control border border-gray-300 text-sm w-full h-[35px] px-3 font-semibold text-center"
            aria-label="Order Quantity"
          />
          <button
            onClick={decrement}
            className="absolute left-0 h-[35px] w-[35px] bg-secondary text-white flex items-center justify-center"
            aria-label="Decrease quantity"
          >
            <FontAwesomeIcon icon={faMinus} className="w-5 h-5" />
          </button>
          <button
            onClick={increment}
            className="absolute right-0 h-[35px] w-[35px] bg-secondary text-white flex items-center justify-center"
            aria-label="Increase quantity"
          >
            <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
          </button>
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-auto gap-2">
          <Button className="bg-[var(--primary-color)] text-white hover:bg-white hover:text-[var(--primary-color)] border border-[var(--primary-color)] text-sm flex items-center gap-1">
            Buy Now
          </Button>
          <Button className="bg-white text-sm border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
