import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, onClick, className, disabled = false, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 transition duration-300 ease-in-out ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:cursor-pointer'} ${className}`}
    >
      {children}
    </button>
  );
}
