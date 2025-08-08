export interface Scope {
  scopeId: number;
  scopeName: string;
}

export interface SalesType {
  saleTypeId: number;
  saleTypeName: string;
}

export const SCOPES: Scope[] = [
  { scopeId: 1, scopeName: "Normal" },
  { scopeId: 2, scopeName: "Special" },
  { scopeId: 3, scopeName: "Featured" },
  { scopeId: 4, scopeName: "Most Viewed" },
];

export const SALES_TYPES: SalesType[] = [
  { saleTypeId: 1, saleTypeName: "Purchase" },
  { saleTypeId: 2, saleTypeName: "Bid" },
  { saleTypeId: 3, saleTypeName: "Hire" },
];