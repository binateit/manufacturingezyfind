import { useState } from "react";
import Link from "next/link";
import { ProductItem } from "@/core/models/products/productList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";
import { formatCurrency } from "@/lib/format";
import ProductImage from "./ProductCard/ProductImage";
import { slugify } from "@/lib/slugify";
import { toast } from "react-toastify";
import { tokenService } from "@/core/services/token.service";
import { cartService } from "@/core/services/cartService";
import { useApolloClient } from "@apollo/client";
import { GET_CART_LIST } from "@/core/graphql/queries/getCartList";
import { useAppUI } from "@/contexts/AppUIContext";


interface PurchaseProductProps {
  product: ProductItem;
}

export default function PurchaseProduct({ product }: PurchaseProductProps) {
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [isWorking, setIsWorking] = useState(false);
  const client = useApolloClient();
  const { openLoginModal } = useAppUI();

  const handleQuantityChange = (value: number) => {
    setOrderQuantity(Math.max(1, value)); // Minimum 1
  };

  const increment = () => handleQuantityChange(orderQuantity + 1);
  const decrement = () => handleQuantityChange(orderQuantity - 1);

  const productLink = `/manufacturing/product/${product.productID}/${slugify(product.productName ?? '')}.html`;

  const addToCart = async () => {
    try {
      setIsWorking(true);
      const sessionId = tokenService.getUserName() ? undefined : tokenService.getToken() || undefined;
      const res = await cartService.addToCart({
        productId: product.productID,
        quantity: orderQuantity,
        sessionId,
        optimistic: {
          productName: product.productName,
          productImage: product.productImage,
          unitCost: product.unitCost,
        },
      });
      if (res.success) {
        toast.success("Added to cart");
        try {
          await client.refetchQueries({ include: [GET_CART_LIST] });
        } catch {}
      } else {
        toast.error(res.message || "Failed to add to cart");
      }
    } catch {
      toast.error("Failed to add to cart");
    } finally {
      setIsWorking(false);
    }
  };

  const buyNow = async () => {
    // If user is not logged in, open login modal and resume on success
    if (!tokenService.getUserName()) {
      openLoginModal(async () => {
        await addToCart();
        window.location.assign('/cart');
      });
      return;
    }
    await addToCart();
    window.location.assign('/cart');
  };


  return (
    <div className="flex flex-col h-full">
      <div className="product-box px-3 py-3 bg-white w-full h-full shadow-[0px_4px_44px_0px_rgb(0,0,0,0.1)] flex flex-col">
        {/* Image */}
        <Link href={productLink}>
        <ProductImage productImage={product.productImage} alt={product.productName ?? 'Product'} />

        {/* Title */}
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
          <Button
            aria-label="Buy Now"
            onClick={buyNow}
            disabled={isWorking}
            className="bg-[var(--primary-color)] text-white hover:bg-white hover:text-[var(--primary-color)] border border-[var(--primary-color)] text-sm flex items-center gap-1"
          >
            {product?.unitCost || product?.unitCost === 0 && product.typeID !==2 ? 'Buy Now' : 'Download Now'}
          </Button>
          <Button
            aria-label="Add To Cart"
            onClick={addToCart}
            disabled={isWorking}
            className="bg-white text-sm border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"
          >
            {isWorking ? 'Please wait…' : 'Add To Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
}
