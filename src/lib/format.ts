export const formatCurrency = (value: number | undefined) => value?.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' });

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
