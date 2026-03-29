import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'text-[#1E2938]',
  primary: 'text-[#006666]',
  success: 'text-[#00A63D]',
  warning: 'text-[#FE9900]',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg bg-[#E7E5E4] px-3 py-1 font-mono text-xs font-bold shadow-[2px_2px_5px_#c4c2c1,-2px_-2px_5px_#ffffff]',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}