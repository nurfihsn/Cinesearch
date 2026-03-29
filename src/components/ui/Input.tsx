import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#1E2938]/40">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full rounded-2xl bg-[#E7E5E4] px-5 py-4 font-mono text-[#1E2938] placeholder:text-[#1E2938]/40',
            'shadow-[inset_4px_4px_8px_#c4c2c1,inset_-4px_-4px_8px_#ffffff] transition-all duration-300',
            'focus:outline-none focus:ring-2 focus:ring-[#006666] focus:ring-offset-2 focus:ring-offset-[#E7E5E4]',
            icon ? 'pl-14' : '',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';