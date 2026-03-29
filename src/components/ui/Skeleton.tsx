import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-[#E7E5E4] shadow-[inset_2px_2px_4px_#c4c2c1,inset_-2px_-2px_4px_#ffffff]',
        className
      )}
    />
  );
}