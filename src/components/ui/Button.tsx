import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 hover:cursor-pointer transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
}
