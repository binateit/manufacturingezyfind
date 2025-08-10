// src/utils/subscriptionUtils.ts

import { DISCOUNTS } from "@/core/constants/discounts";
import { Package } from "@/core/models/packages/package";

// Tenure to price field mapping
const TENURE_PRICE_MAP: Record<number, keyof Package> = {
  3: "threeMonths",
  6: "sixMonths",
  12: "twelveMonths",
};

// Function to calculate the subscription price, applying the discount for the selected tenure
export function calculateDiscountedSubscriptionPrice(pkg: Package, tenure: number) {
  const priceKey = TENURE_PRICE_MAP[tenure];

  // Retrieve the price based on tenure, fallback to default price if not found
  const price: number = priceKey ? Number(pkg[priceKey]) ?? 0 : pkg.amount ?? 0;

  // Get the discount percentage based on tenure (default to 0 if not found)
  const discountPercent = DISCOUNTS[tenure] ?? 0;

  // Calculate discounted price and discount amount
  const discountedPrice = price - (price * discountPercent) / 100;
  const discountAmount = price - discountedPrice;

  return { price, discountedPrice, discountPercent, discountAmount };
}
