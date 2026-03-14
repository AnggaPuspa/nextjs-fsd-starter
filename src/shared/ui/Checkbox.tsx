import { InputHTMLAttributes, forwardRef } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', label, id, ...props }, ref) => {
    return (
      <div className="flex">
        <input
          type="checkbox"
          id={id}
          ref={ref}
          className={`shrink-0 mt-0.5 border border-gray-400 rounded-[4px] text-blue-600 focus:ring-blue-500 ${className}`}
          {...props}
        />
        <label htmlFor={id} className="text-sm text-gray-500 ms-3 cursor-pointer">
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
