import React from 'react';
import { cn } from '../../lib/utils';

export const Badge = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    secondary: "bg-slate-800 text-slate-300 border border-slate-700",
    outline: "text-slate-300 border border-slate-600",
  };

  return (
    <div
      ref={ref}
      className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none", variants[variant], className)}
      {...props}
    />
  );
});
Badge.displayName = "Badge";
