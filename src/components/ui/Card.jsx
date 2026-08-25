import React from 'react';
import { cn } from '../../lib/utils';

export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm text-slate-100 shadow-xl", className)}
    {...props}
  />
));
Card.displayName = "Card";
