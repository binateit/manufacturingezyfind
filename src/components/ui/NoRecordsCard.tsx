interface NoRecordsCardProps {
    message?: string;
}

export function NoRecordsCard({ message = "No records found" }: NoRecordsCardProps) {
    return (
        <div className="flex-1 bg-white">
            <div className="flex flex-col items-center justify-center text-center w-full h-full min-h-[calc(100vh-150px)]">
                {/* Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-gray-400 mb-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 
             9-9 9 4.03 9 9z"
                    />
                </svg>

                {/* Message */}
                <p className="text-gray-500 text-2xl font-semibold">{message}</p>
            </div>
        </div>
    );
}
