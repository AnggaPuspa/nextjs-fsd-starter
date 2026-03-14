import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'danger' | 'outline';
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    danger: 'bg-red-50 text-red-600 hover:bg-red-100',
    outline: 'border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
