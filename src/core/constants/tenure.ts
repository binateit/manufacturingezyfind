// src/core/constants/tenure.ts
import { DISCOUNTS } from './discounts';

const baseClasses = "relative z-[9]";
const beforeBaseClasses = "before:absolute before:z-[-9] before:h-[40px] before:w-[40px] before:rounded-[9px] before:top-[5px]";

export interface TenureItem {
  key: number;
  label: string;
  color: string;
  extra: string;
  hasDiscount: boolean;
}

const tenureItems: TenureItem[] = [
  {
    key: 1,
    label: '1 Month',
    color: `bg-primary sm:rounded-tl-[15px] sm:rounded-bl-[15px] ${baseClasses} before:bg-[var(--primary-color)] before:left-[-10px] before:rotate-[45deg] ${beforeBaseClasses}`,
    extra: '',
    hasDiscount: false,
  },
  {
    key: 3,
    label: '3 Months',
    color: 'bg-[#290206]',
    extra: `(${DISCOUNTS[3]}% Off)`,
    hasDiscount: true,
  },
  {
    key: 6,
    label: '6 Months',
    color: 'bg-primary',
    extra: `(${DISCOUNTS[6]}% Off)`,
    hasDiscount: true,
  },
  {
    key: 12,
    label: '12 Months',
    color: `bg-[#290206] sm:rounded-tr-[15px] sm:rounded-br-[15px] ${baseClasses} before:bg-[#290206] before:right-[-10px] before:rotate-[45deg] ${beforeBaseClasses}`,
    extra: `(${DISCOUNTS[12]}% Off)`,
    hasDiscount: true,
  },
];

export default tenureItems;
