"use client";

import { ReactNode, useState } from "react";

export type AlertVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark";

interface AlertProps {
  variant?: AlertVariant;
  children: ReactNode;
  className?: string;
  dismissible?: boolean;
  icon?: ReactNode;
}

const variants: Record<AlertVariant, string> = {
  primary: "bg-blue-500 border text-blue-600",
  secondary: "bg-gray-800 border text-gray-400",
  success: "bg-teal-400 border text-teal-500",
  warning: "bg-yellow-400 border text-yellow-500",
  danger: "bg-red-400 border text-red-500",
  info: "bg-blue-200 border text-blue-300",
  light: "bg-gray-200 border border-gray-100 text-gray-400",
  dark: "bg-gray-100 border border-gray-400 text-gray-500",
};

export function Alert({
  variant = "primary",
  children,
  className = "",
  dismissible = false,
  icon,
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={`text-sm rounded-sm p-4 flex items-start gap-2 ${variants[variant]} ${className}`}
      role="alert"
    >
      {icon && <span className="shrink-0 text-base">{icon}</span>}
      <span className="flex-1">{children}</span>
      {dismissible && (
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="shrink-0 ml-auto -mr-1 text-current opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  );
}
