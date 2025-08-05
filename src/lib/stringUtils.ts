import { slugify } from "./slugify";

const normalize = (value: string) => slugify(value.trim().toLowerCase());

// --- Parse delimited query param into string array ---
export const getParamArray = (param?: string): string[] =>
  param?.split('|').map((v) => v.trim()).filter(Boolean) ?? [];

// --- Find readable names from slugs ---
export const findNamesFromSlugs = <T>(
  slugs: string[],
  list: T[],
  nameKey: keyof T
): string[] =>
  list
    .filter((item) => slugs.includes(normalize(String(item[nameKey]))))
    .map((item) => String(item[nameKey]));

// --- Get IDs by readable names ---
export const getIdsFromNames = <T>(
  names: string[],
  list: T[],
  nameKey: keyof T,
  idKey: keyof T
): number[] =>
  list
    .filter((item) => names.includes(String(item[nameKey])))
    .map((item) => Number(item[idKey]));

// --- Get IDs by slugs (via name key) ---
export const getIdsFromSlugs = <T>(
  slugs: string[],
  list: T[],
  nameKey: keyof T,
  idKey: keyof T
): number[] =>
  list
    .filter((item) => slugs.includes(normalize(String(item[nameKey]))))
    .map((item) => Number(item[idKey]));

export const getString = (value: string | string[] | undefined): string | undefined => {
  if (Array.isArray(value)) return value[0];
  return value;
};