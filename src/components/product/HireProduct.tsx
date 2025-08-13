import { useState } from "react";
import ProductImage from "./ProductCard/ProductImage";
import ProductInfo from "./ProductCard/ProductInfo";
import QuantitySelector from "./ProductCard/QuantitySelector";
import DateSelector from "./ProductCard/DateSelector";
import Button from "../ui/Button";
import { ProductItem } from "@/core/models/products/productList";
import Link from "next/link";
import { slugify } from "@/lib/slugify";
import { tokenService } from "@/core/services/token.service";
import { useAppUI } from "@/contexts/AppUIContext";
import { cartService } from "@/core/services/cartService";
import { toast } from "react-toastify";
import { useApolloClient } from "@apollo/client";
import { GET_CART_LIST } from "@/core/graphql/queries/getCartList";

interface HireProductProps {
  product: ProductItem;
  refetchOnSuccess?: () => void;
}

export default function HireProduct({ product, refetchOnSuccess }: HireProductProps) {
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [isWorking, setIsWorking] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const { openLoginModal } = useAppUI();
  const client = useApolloClient();

  const addToCart = async () => {
    if (!fromDate || !toDate) {
      toast.error('Please select start and end date');
      return;
    }
    try {
      setIsWorking(true);
      const sessionId = tokenService.getUserName() ? undefined : tokenService.getToken() || undefined;
      const res = await cartService.addToCart({
        productId: product.productID,
        quantity: orderQuantity,
        sessionId,
        fromDate: new Date(fromDate).toISOString(),
        endDate: new Date(toDate).toISOString(),
        optimistic: {
          productName: product.productName,
          productImage: product.productImage,
          unitCost: product.unitCost,
        },
      });
      if (res.success) {
        toast.success("Added to cart");
        setFromDate("");
        setToDate("");
        try {
          await client.refetchQueries({ include: [GET_CART_LIST] });
        } catch { }
      } else {
        toast.error(res.message || "Failed to add to cart");
      }
    } catch {
      toast.error("Failed to add to cart");
    } finally {
      setIsWorking(false);
    }
  };

  const handleHireNow = async () => {
    if (!fromDate || !toDate || isNaN(Date.parse(fromDate)) || isNaN(Date.parse(toDate))) {
      toast.error("Please select valid start and end dates");
      return;
    }
    try {
      setIsWorking(true);
      const formattedFromDate = new Date(fromDate).toISOString();
      const formattedToDate = new Date(toDate).toISOString();
      const result = await cartService.hireProduct({
        hireId: 0,
        fromDate: formattedFromDate,
        toDate: formattedToDate,
        productId: product.productID
      });
      if (result?.hireId) {
        toast.success("Successfully Hired");
      } else {
        toast.error("Failed to Hire");
      }
    } catch  {
      toast.error("Something went wrong");
    } finally {
      setIsWorking(false);
    }
  }
  const hireNow = async () => {
    if (!tokenService.getUserName()) {
      openLoginModal(async () => {
        await handleHireNow();
        await addToCart();
        window.location.assign('/cart');
      });
      return;
    }
    await handleHireNow();
    if (refetchOnSuccess) {
      refetchOnSuccess();
    }
    await addToCart();
    window.location.assign('/cart');
  }
  return (
    <div className="flex flex-col h-full">
      <div className="px-3 py-3 product-box bg-white w-full shadow-[0px_4px_44px_0px_rgb(0,0,0,0.1)] h-full flex flex-col">

        <Link href={`/manufacturing/product/${product.productID}/${slugify(product.productName ?? '')}.html`}>
          <ProductImage productImage={product.productImage} alt={product.productName ?? ''} />
          <ProductInfo productID={product.productID} productName={product.productName ?? ''} unitCost={product.unitCost} />
        </Link>

        <QuantitySelector value={orderQuantity} onChange={setOrderQuantity} />

        <DateSelector fromDate={fromDate} toDate={toDate} onFromDateChange={setFromDate} onToDateChange={setToDate} />

        <div className="flex justify-between mt-auto">
          <Button className="bg-[var(--primary-color)] hover:bg-white border border-[var(--primary-color)] text-sm flex items-center gap-1 text-white hover:text-[var(--primary-color)]" disabled={isWorking} onClick={hireNow}>{isWorking ? 'processing ' : 'Hire Now'}</Button>
          <Button className="bg-white text-sm border-1 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white flex" disabled={isWorking} onClick={addToCart} >{isWorking ? 'Processing...' : 'Add To Cart'}</Button>
        </div>
      </div>
    </div>
  );
}
