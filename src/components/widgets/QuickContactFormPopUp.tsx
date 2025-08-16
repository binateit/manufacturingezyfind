"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface QuickContactFormProps {
    companyId: number;
    companyName: string;
    title: string;
}

const QuickContactFormPopUp = ({  }: QuickContactFormProps) => {
    const [open, setOpen] = useState(false);
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[1200] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-[600px] md:max-w-[700px] lg:max-w-[780px] bg-white rounded shadow-lg overflow-hidden h-[50vh] min-h-[50vh] flex flex-col">
                <button
                    type="button"
                    aria-label="Close"
                    onClick={() => setOpen(false)}
                    className="absolute z-[1300] top-2 right-2 p-1 bg-white text-red-600 shadow transition-all focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    <FontAwesomeIcon icon={faTimes} className="text-base" />
                </button>

                <div className="h-10 md:h-12 bg-[var(--primary-color)] text-white text-md flex items-center pl-4 font-semibold flex-shrink-0">

                </div>

                <div className="p-4 md:p-6 overflow-y-auto flex-1 request-item-form-modal">
                
                </div>

                <style jsx>{`
          /* Neutralize absolute/offset styles inside modal for proper layout */
          .request-item-form-modal :global(> div) {
            position: static !important;
            top: 0 !important;
            height: auto !important;
          }
          .request-item-form-modal :global(.triangle) {
            display: none !important;
          }
        `}</style>
            </div>
        </div>
    );
}
export default QuickContactFormPopUp