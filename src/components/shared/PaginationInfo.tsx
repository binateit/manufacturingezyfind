interface PaginationInfoProps {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  label?: string; // e.g. "Products", "Users", defaults to "items"
}

export function PaginationInfo({
  currentPage,
  pageSize,
  totalCount,
  label = "items",
}: PaginationInfoProps) {
  if (totalCount === 0) return null;

  const from = (currentPage - 1) * pageSize + 1;
  const to = Math.min(currentPage * pageSize, totalCount);

  return (
    <div className="bg-white card-shadow py-3 px-3 flex gap-3 items-center justify-between mb-5">
      <div className="text-sm">
        Showing {from} to {to} of {totalCount} {label}
      </div>
    </div>
  );
}
