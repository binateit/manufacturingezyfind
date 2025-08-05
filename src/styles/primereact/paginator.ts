export const paginator = {
  root: {
    className: "flex flex-wrap justify-center gap-2", // ✅ Center align & allow wrapping
  },
  firstPageButton: {
    className:
      "h-[35px] w-[35px] flex justify-center items-center cursor-pointer text-sm hover:bg-gray-200 transition-colors duration-300",
  },
  lastPageButton: {
    className:
      "h-[35px] w-[35px] flex justify-center items-center cursor-pointer text-sm hover:bg-gray-200 transition-colors duration-300",
  },
  prevPageButton: {
    className:
      "h-[35px] w-[35px] flex justify-center items-center cursor-pointer text-sm hover:bg-gray-200 transition-colors duration-300",
  },
  nextPageButton: {
    className:
      "h-[35px] w-[35px] flex justify-center items-center cursor-pointer text-sm hover:bg-gray-200 transition-colors duration-300",
  },
  pageButton: ({ context }: { context: { active: boolean } }) => ({
    className: `h-[35px] w-[35px] flex justify-center items-center cursor-pointer text-sm border border-gray-300 transition-colors duration-300 ${
      context.active
        ? "bg-[var(--primary-color)] text-white font-bold hover:bg-[var(--primary-dark-color)]" // ✅ Active page hover effect
        : "hover:bg-gray-200 hover:text-[var(--primary-color)]"
    }`,
  }),
  pages: {
    className: "flex flex-wrap justify-center gap-2", // ✅ Ensure buttons wrap properly
  },
};
