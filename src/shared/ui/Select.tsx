import { SelectHTMLAttributes, forwardRef, ReactNode } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  children: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", label, error, helperText, disabled, id, children, ...props }, ref) => {
    return (
      <div className="mb-4">
        {label && (
          <label
            htmlFor={id}
            className={`block text-sm mb-2 text-gray-400 ${disabled ? "opacity-60" : ""}`}
          >
            {label}
          </label>
        )}
        <select
          id={id}
          ref={ref}
          disabled={disabled}
          className={`py-3 px-4 pe-9 block w-full border border-gray-200 rounded-sm text-sm text-gray-500
            focus:border-blue-500 focus:ring-0 focus:outline-none
            disabled:bg-gray-200 disabled:opacity-60 disabled:pointer-events-none disabled:shadow-xl
            ${error ? "border-red-500 focus:border-red-500" : ""}
            ${className}`}
          aria-describedby={helperText || error ? `${id}-description` : undefined}
          {...props}
        >
          {children}
        </select>
        {(helperText || error) && (
          <p
            id={`${id}-description`}
            className={`text-sm mt-2 ${
              error ? "text-red-500" : "text-gray-400 opacity-75"
            }`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
