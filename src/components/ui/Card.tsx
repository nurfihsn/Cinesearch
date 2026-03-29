import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-[#E7E5E4] shadow-[6px_6px_12px_#c4c2c1,-6px_-6px_12px_#ffffff] overflow-hidden',
        hoverable && 'transition-all duration-300 hover:shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}