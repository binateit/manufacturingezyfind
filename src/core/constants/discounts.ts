// src/core/constants/discounts.ts
import { ENV } from '@/core/config/env';

export const DISCOUNTS: Record<number, number> = {
  3: Number(ENV.THREE_MONTH_DISCOUNT),
  6: Number(ENV.SIX_MONTH_DISCOUNT),
  12: Number(ENV.TWELVE_MONTH_DISCOUNT),
};