import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'palestinian' | 'white';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    outline: 'border border-emerald-600 bg-white text-emerald-600 hover:bg-emerald-50 focus-visible:ring-emerald-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    palestinian: 'bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    white: 'bg-white text-emerald-600 hover:bg-emerald-50 focus-visible:ring-emerald-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
  };
  
  const sizeClasses = {
    sm: 'h-9 px-4 py-2 text-sm rounded-xl',
    md: 'h-10 px-6 py-2 rounded-xl',
    lg: 'h-12 px-8 py-3 text-lg rounded-2xl'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
