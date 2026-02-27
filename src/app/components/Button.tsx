import React from 'react';
import { Link } from 'react-router';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  to, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };
  
  const baseStyles = `rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 ${sizeStyles[size]}`;
  
  const variantStyles = {
    primary: "bg-[#D4AF37] text-black hover:bg-[#E4C77D] shadow-lg shadow-[#D4AF37]/20",
    secondary: "bg-[#1A1A1A] text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#2A2A2A]",
    outline: "bg-transparent text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
  };
  
  const disabledStyles = "opacity-50 cursor-not-allowed";
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ''} ${className}`;
  
  if (to) {
    return <Link to={to} className={styles}>{children}</Link>;
  }
  
  return (
    <button type={type} onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}