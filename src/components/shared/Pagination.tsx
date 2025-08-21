interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
    if (totalPages <= 0) return null;

    return (
        <div className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`h-[35px] w-[35px] text-sm border ${currentPage === i + 1
                            ? "bg-primary text-white font-bold"
                            : "hover:bg-gray-200 hover:text-primary"
                        }`}
                    aria-label={currentPage === i + 1 ? `Current page ${i + 1}` : `Go to page ${i + 1}`}
                    aria-current={currentPage === i + 1 ? "page" : undefined}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};
