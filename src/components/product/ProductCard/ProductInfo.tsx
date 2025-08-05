import Link from "next/link";
import { formatCurrency } from "@/lib/format";
import slugify from "slugify";

interface ProductInfoProps {
  productID: number;
  productName: string;
  unitCost: number;
}

export default function ProductInfo({ productID, productName, unitCost }: ProductInfoProps) {
  return (
    <>
      <Link href={`/manufacturing/product/${productID}/${slugify(productName ?? '')}.html`}>
        <p className="text-base font-semibold mb-3 line-clamp-2 min-h-[48px] hover:text-[var(--primary-color)] transition-colors">
          {productName}
        </p>
      </Link>
      <p className="font-medium mb-3">
        {formatCurrency(unitCost)} <span className="text-sm font-light text-gray-500">Hire per day</span>
      </p>
    </>
  );
}
