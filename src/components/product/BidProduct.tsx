'use client'
import { useEffect, useMemo, useState } from "react";
import { formatCurrency } from "@/lib/format";
import { formatTimeLeft } from "@/lib/formatTimeLeft";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGavel } from "@fortawesome/free-solid-svg-icons";
import { ProductItem } from "@/core/models/products/productList";
import ProductImage from "./ProductCard/ProductImage";
import { slugify } from "@/lib/slugify";
import { cartService } from "@/core/services/cartService";
import { toast } from "react-toastify";
import { tokenService } from "@/core/services/token.service";
import { useAppUI } from "@/contexts/AppUIContext";

interface BidProductProps {
  product: ProductItem;
  refetchOnSuccess: () => void;
}

export default function BidProduct({ product, refetchOnSuccess }: BidProductProps) {
  const [timeLeft, setTimeLeft] = useState(0);
  const { openLoginModal } = useAppUI();

  const lastBid = useMemo(() => {
    return product.prdBid?.slice().sort((a, b) => (b?.bidId ?? 0) - (a?.bidId ?? 0))[0] ?? null;
  }, [product.prdBid]);

  const baseAmount = lastBid?.bidAmount ?? product.unitCost ?? 0;
  const [bidAmount, setBidAmount] = useState<number>(baseAmount * 1.1);
  const [isWorking, setIsWorking] = useState(false);

  const handleIncreaseBid = () => {
    setBidAmount((prev) => parseFloat((prev * 1.1).toFixed(2)));
  };

  useEffect(() => {
    const end = new Date(product.endDate ?? "").getTime();

    const updateTime = () => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((end - now) / 1000));
      setTimeLeft(diff);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [product.endDate]);

  useEffect(() => {
    setBidAmount(baseAmount * 1.1);
  }, [baseAmount]);

  const handleBidNow = async (amount?: number) => {
    try {
      setIsWorking(true);
      const result = await cartService.bidOnProduct({
        bidId: 0,
        bidAmount: amount || baseAmount,
        productId: product.productID
      });
      if (result?.bidId) {
        toast.success("Successfully bid!");
      } else {
        toast.error("Failed to Bid")
      }
    } catch (err) {
      console.error("Bid failed:", err);
      toast.error("Something went wrong while bidding.");
    } finally {
      setIsWorking(false);
    }
  };

  const bidNow = async (amount?: number) => {
    if (!tokenService.getUserName()) {
      openLoginModal(async () => {
        await handleBidNow(amount);
        refetchOnSuccess();
      });
      return;
    }
    await handleBidNow(amount);
    refetchOnSuccess();
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white shadow-[0px_4px_44px_0px_rgb(0,0,0,0.1)] h-full flex flex-col px-3 py-3">
        {/* Image */}
        <ProductImage productImage={product.productImage} alt={product.productName ?? ''} />

        {/* Title */}
        <Link
          href={`/manufacturing/product/${product.productID}/${slugify(product.productName ?? "")}`}
          className="text-base font-semibold mb-3 line-clamp-2 min-h-[48px] hover:text-[var(--primary-color)] transition-colors"
        >
          {product.productName}
        </Link>

        {/* Price */}
        <p className="font-medium mb-3">
          {formatCurrency(baseAmount)}{" "}
          <span className="text-sm font-light text-gray-500">Last Bid</span>
        </p>

        {/* Time Left */}
        <p className="text-xs text-gray-500 mb-2">
          Time Left:{" "}
          <span className="font-semibold text-[var(--primary-color)]">
            {formatTimeLeft(timeLeft)}
          </span>
        </p>

        {/* Bid Amount Input */}
        <div className="relative mb-3">
          <input
            value={formatCurrency(bidAmount)}
            readOnly
            disabled
            className="form-control border border-gray-300 text-sm w-full h-[35px] px-3 font-semibold"
          />
          <button
            onClick={handleIncreaseBid}
            className="absolute right-0 top-0 h-[35px] w-[35px] bg-secondary text-white flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faGavel} />
          </button>
        </div>

        {/* Action */}
        <div className="flex justify-between items-center mt-auto">
          <Button className="w-full bg-[var(--primary-color)] hover:bg-white border border-[var(--primary-color)] text-sm flex items-center justify-center gap-1 text-white hover:text-[var(--primary-color)]" onClick={() => bidNow(bidAmount)} disabled={isWorking}>
            <FontAwesomeIcon icon={faGavel} />
            {isWorking ? 'Processing...' : 'Bid Now'}
          </Button>
        </div>
      </div>
    </div>
  );
}
