export interface Package {
  activeText: string | null;
  amount: number | null;
  threeMonths: number | null;
  sixMonths: number | null;
  twelveMonths: number | null;
  threeMonthsVat: number | null;
  sixMonthsVat: number | null;
  twelveMonthsVat: number | null;
  fiveDiscount: number | null;
  tenDiscount: number | null;
  fifteenDiscount: number | null;
  isActive: boolean | null;
  isRecommended: boolean | null;
  packageID: number;
  packageName: string;
  recommendedText: string | null;
  sortOrder: number | null;
  fiveOFF: number | null;
  tenOFF: number | null;
  fifteenOFF: number | null;
  zeroOFF: number | null;
}