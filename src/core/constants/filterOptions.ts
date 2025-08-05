export interface Scope {
  scopeId: number;
  scopeName: string;
}

export interface SalesType {
  salesTypeId: number;
  salesTypeName: string;
}

export const SCOPES: Scope[] = [
  { scopeId: 1, scopeName: "Normal" },
  { scopeId: 2, scopeName: "Special" },
  { scopeId: 3, scopeName: "Featured" },
  { scopeId: 4, scopeName: "Most Viewed" },
];

export const SALES_TYPES: SalesType[] = [
  { salesTypeId: 1, salesTypeName: "Purchase" },
  { salesTypeId: 2, salesTypeName: "Bid" },
  { salesTypeId: 3, salesTypeName: "Hire" },
];