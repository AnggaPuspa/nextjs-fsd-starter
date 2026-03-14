import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "dark"
  | "light"
  | "link"
  | "outline-primary"
  | "outline-secondary"
  | "outline-success"
  | "outline-warning"
  | "outline-danger"
  | "outline-info"
  | "outline-dark"
  | "outline-light";

export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none rounded-2xl";

  const variants: Record<ButtonVariant, string> = {
    primary: "border border-transparent bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border border-transparent bg-gray-400 text-white hover:bg-gray-700",
    success: "border border-transparent bg-teal-500 text-white hover:bg-teal-600",
    warning: "border border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
    danger: "border border-transparent bg-red-500 text-white hover:bg-red-600",
    info: "border border-transparent bg-blue-300 text-white hover:bg-blue-400",
    dark: "border border-transparent bg-gray-500 text-white hover:bg-gray-700",
    light: "border border-transparent bg-gray-200 text-gray-500 hover:bg-gray-600 hover:text-white",
    link: "text-blue-600 hover:text-blue-700 hover:border-transparent",
    "outline-primary": "border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600",
    "outline-secondary": "border border-gray-400 text-gray-400 hover:text-white hover:bg-gray-400",
    "outline-success": "border border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500",
    "outline-warning": "border border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500",
    "outline-danger": "border border-red-500 text-red-500 hover:text-white hover:bg-red-500",
    "outline-info": "border border-blue-300 text-blue-300 hover:text-white hover:bg-blue-300",
    "outline-dark": "border border-gray-700 text-gray-700 hover:border-gray-700 hover:text-white hover:bg-gray-500",
    "outline-light": "border border-gray-200 text-gray-200 hover:border-transparent hover:text-gray-500 hover:bg-gray-200",
  };

  const currentVariant = variants[variant] || variants.primary;
  const sizes: Record<ButtonSize, string> = {
    sm: "py-1.5 px-4 text-sm",
    md: "py-[10px] px-6 text-base",
    lg: "py-3 px-8 text-lg",
  };

  const currentSize = variant === "link" ? "" : sizes[size];

  return (
    <button
      className={`${baseClasses} ${currentSize} ${currentVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
