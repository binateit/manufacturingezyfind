import { formatCurrency } from "@/lib/format";

interface ProductInfoProps {
  productID: number;
  productName: string;
  unitCost: number;
}

export default function ProductInfo({  productName, unitCost }: ProductInfoProps) {
  return (
    <>

      <p className="text-base font-semibold mb-3 line-clamp-2 min-h-[48px] hover:text-[var(--primary-color)] transition-colors">
        {productName}
      </p>
      <p className="font-medium mb-3">
        {formatCurrency(unitCost)} <span className="text-sm font-light text-gray-500">Hire per day</span>
      </p>
    </>
  );
}
