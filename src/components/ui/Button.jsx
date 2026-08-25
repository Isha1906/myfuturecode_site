import React from 'react';
import { cn } from '../../lib/utils';

export const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-background cursor-pointer";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500",
    secondary: "bg-slate-800 text-white hover:bg-slate-700",
    outline: "border border-slate-700 hover:bg-slate-800 text-slate-100",
    ghost: "hover:bg-slate-800 hover:text-slate-100 text-slate-300",
  };
  
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 py-2 px-4",
    lg: "h-11 px-8 text-lg",
    icon: "h-10 w-10",
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
});
Button.displayName = "Button";
