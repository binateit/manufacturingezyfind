import { DISCOUNTS } from "@/core/constants/discounts";
import { Package } from "@/core/models/packages/package";

const TENURE_PRICE_MAP: Record<number, keyof Package> = {
    3: "threeMonths",
    6: "sixMonths",
    12: "twelveMonths",
};


export default function getSubscriptionPlanPrice(pkg: Package, tenure: number) {
    const priceKey = TENURE_PRICE_MAP[tenure];

    const price: number = priceKey ? Number(pkg[priceKey]) ?? 0 : pkg.amount ?? 0;
    const discountPercent = DISCOUNTS[tenure] ?? 0;
    const discountedPrice = price - (price * discountPercent) / 100;
    const discountAmount = price - discountedPrice;

    return { price, discountedPrice, discountPercent, discountAmount };
};
